<?php

$filename = uniqid('shpic');
$frontfile = sprintf('tmp/%s_front.svg', $filename);
$backfile = sprintf('tmp/%s_back.svg', $filename);

$frontfilePDF = sprintf('tmp/%s_front.pdf', $filename);
$backfilePDF = sprintf('tmp/%s_back.pdf', $filename);
$bothsidesfilePDF = sprintf('tmp/%s_full.pdf', $filename);


$svg = rewriteSVG( $_POST['svgFrontside']);
file_put_contents($frontfile, $svg);

$svg = rewriteSVG( $_POST['svgBackside']);
file_put_contents($backfile, $svg);

$exportWidth = 1000;

$format = 'pdf';

convert($frontfile, $exportWidth, $format);
convert($backfile, $exportWidth, $format);

$command = sprintf('pdfunite %s %s %s', $frontfilePDF, $backfilePDF, $bothsidesfilePDF);
exec( $command );


$return = [];
$return['basename'] = basename($bothsidesfilePDF, '.pdf' );
echo json_encode($return);

function rewriteSVG( $svg ){
    $svg = preg_replace('/_small/', '', $svg);

    $svgHeader = '<?xml version="1.0" standalone="no"?>'; // XML node needed by imagick
    $svgTag = 'svg'; // tag to search for
    preg_match_all("/\<svg(.*?)\>/", $svg, $matches); // Get initial SVG node that may contain missing :xlink

    // Für den Safari
    if (!preg_match("/xmlns:xlink/", $matches[1][0])) {
        $tempString = str_replace_nth('xmlns=', 'xmlns:xlink=', $matches[1][0], 1); // Replace second occurance of xmlns
        $svg = str_replace($matches[1][0], $tempString, $svg);
    }

    $svg = preg_replace('/NS([1-9]|[1-9][0-9]):/', 'xlink:', $svg); // Remove offending NS<number>: in front of href tags, will only remove NS0 - NS99


    // Für den Firefox
    $svg = preg_replace('#([^:])\/\/#', "$1/", $svg);

    $svg = $svgHeader . $svg; // Prefix SVG string with required XML node

    return $svg;
}


function convert($filename, $width, $format){
    switch($format){
        case 'svg':
            $command = sprintf("inkscape %s --export-text-to-path --export-plain-svg=%s",
                $filename,
                'tmp/' . basename($filename, 'svg') . $format);
        break;
        case 'pdf':
            $command = sprintf("inkscape %s --export-pdf=%s",
                $filename,
                'tmp/' . basename($filename, '.svg') . '.pdf');
            break;
        default:
            $command = sprintf("inkscape %s --export-width=%d --export-{$format}=%s --export-dpi=90 --export-background-opacity=0",
                $filename,
                $width,
                'tmp/' . basename($filename, 'svg') . $format);
    }

    exec($command);
}


function sanitize_filename($var)
{
    return preg_replace('/[^a-zA-Z0-9]/', '', $var);
}

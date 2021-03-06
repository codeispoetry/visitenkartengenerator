<?php

$filename = sanitize_filename($_GET['file']);
$downloadname = $_GET['downloadname'] ?: 'gruene';

$contentType = 'application/pdf';
$format = 'pdf';

logthis( $filename );

header('Content-Type: ' . $contentType);
header('Content-Disposition: attachment; filename="' . $downloadname . '.' . $format . '"');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
readfile('tmp/' . $filename . '.' . $format);

//unlink('tmp/' . $filename . '.' . $format);
//  unlink('tmp/' . $filename . '.svg');


function logthis( $filename){
    $line = sprintf("%s\t%s\t%s\n", time(), $filename, "download" );
    file_put_contents('log/log.txt', $line, FILE_APPEND);
}

function sanitize_filename($var){
    return preg_replace('/[^a-zA-Z0-9_]/', '', $var);
}

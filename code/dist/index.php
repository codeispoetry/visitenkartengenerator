<?php
$samlfile = '/var/simplesaml/lib/_autoload.php';
$landesverband = 0;
$is_berlin = false;

if (file_exists($samlfile)) {
    require_once($samlfile);
    $as = new SimpleSAML_Auth_Simple('default-sp');
    $as->requireAuth();

    $attributes = $as->getAttributes();
    $landesverband = (int) substr($attributes['membershipOrganizationKey'][0], 1, 2);

}

if (file_exists('log/do.php')){
    require_once('log/do.php');
}

?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8"/>
    <title>Visitenkartengenerator</title>
    <link rel="stylesheet" type="text/css" href="./assets/css/styles.css">
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center pt-4 pb-3">
            <h1 class="text-uppercase h6">Visitenkartengenerator</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-9">

                <div class="d-flex justify-content-center ">
                    <div id="canvas1" class="canvas mr-3"></div>

                    <div id="canvas2" class="canvas"></div>
                </div>
        </div>

        <div class="col-12 col-md-3 cockpit">
           <?php require_once('cockpit.php'); ?>
        </div>
    </div>

</div>

<footer class="row bg-primary p-2 text-white">
    <div class="col-12 col-lg-8">
        <a href="https://github.com/codeispoetry/visitenkartengenerator" target="_blank">Quellcode auf
            github.com</a>
    </div>

    <div class="col-12 col-lg-4 text-lg-right">
        Programmiert mit <i class="fas fa-heart text-danger"></i> von Tom Rose.
    </div>
</footer>





<script src="./vendor/jquery-3.4.1.min.js"></script>
<script src="./vendor/svg.min.js"></script>

<script src="./assets/js/main.min.js"></script>
</body>
</html>
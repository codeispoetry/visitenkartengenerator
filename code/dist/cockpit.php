<form id="pic">
    <div class="list-group">

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Datenformat mit Beschnittzugabe</h6>
                <small class="" title="mit Beschnittzugabe">
                    <i class="fas fa-question-circle"></i>
                </small>
            </div>
            <div class="mb-1 list-group-item-content">
                <div class="form-inline">
                    <div class="form-row sizecontainer">
                        <input type="number" value="91" class="form-control size" name="width" id="width" step="1">
                        <span class="m-1">x</span>
                        <input type="number" value="61" class="form-control size mr-1" name="height" id="height" step="1">
                        <span class="m-1 mr-3">Millimeter</span>
                        <select class="form-control selectpicker fas d-none" id="sizepresets">
                            <option class="fas">&#xf5cb;</option>

                            <?php
                            $sizes = parse_ini_file('ini/picturesizes.ini', TRUE);
                            foreach($sizes AS $name=>$group ){
                                printf ('<optgroup label="%s">', $name);
                                foreach($group AS $label => $size){
                                    list($width,$height) = preg_split("/[^0-9]/",trim($size));
                                    printf('<option value="%d:%d">%s</option>', $width, $height, $label);
                                }
                                echo '</optgroup>';
                            }
                            ?>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex align-items-lg-center">
                <input type="text" name="name" id="name" value="" placeholder="Name" class="form-control trigger">
            </div>

            <div class="d-flex align-items-lg-center">
                <input type="text" placeholder="Amt" name="title" id="title" value="" class="form-control trigger">
            </div>
        </div>

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <textarea placeholder="Linke Spalte" name="left" id="left" class="form-control trigger"></textarea>
        </div>

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <textarea placeholder="Rechte Spalte" name="right" id="right" class="form-control trigger"></textarea>
        </div>

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="logo-tab" data-toggle="tab" href="#tab-logo" role="tab" aria-controls="home" aria-selected="true">Logo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="quote-tab" data-toggle="tab" href="#tab-quote" role="tab" aria-controls="profile" aria-selected="false">Zitat</a>
                </li>

            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="tab-logo" role="tabpanel" aria-labelledby="logo-tab">
                    <input type="text" placeholder="Stadt" name="city" id="city" value="" class="form-control trigger">
                </div>
                <div class="tab-pane" id="tab-quote" role="tabpanel" aria-labelledby="quote-tab">
                    <div>
                        <input type="text" placeholder="Text über der Linie" name="textbefore" id="textbefore" value="" class="d-none form-control">
                        <textarea placeholder="Zitat" name="quote" id="quote" class="form-control trigger">Hier steht ein
[Zitat]</textarea>
                        <input type="text" placeholder="Text unter der Linie" name="textafter" id="textafter" value="" class="form-control">
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" name="textsamesize" id="textsamesize">
                            Zeilen gleich lang
                        </label>
                    </div>
                    <div>
                        <small>Text in eckigen Klammern [ ] wird gelb</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <button class="btn btn-secondary btn-sm mt-3 download">
                <i class="fas fa-download"></i> Download
            </button>
        </div>

    </div>

    <div>
        <input type="hidden" name="pinX" id="pinX">

    </div>


</form>
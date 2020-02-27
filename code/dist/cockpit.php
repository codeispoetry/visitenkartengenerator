<form id="pic">
    <div class="list-group">

        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">Ausgabegröße</h6>
                <small class="text-primary cursor-pointer" id="sizereset"><i class="fas fa-undo-alt"></i>
                    zurücksetzen</small>

            </div>
            <div class="mb-1 list-group-item-content">
                <div class="form-inline">
                    <div class="form-row sizecontainer">
                        <input type="number" value="435" class="form-control size" name="width" id="width" step="1">
                        <span class="m-1">x</span>
                        <input type="number" value="285" class="form-control size mr-1" name="height" id="height" step="1">
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
            <input type="text" placeholder="Stadt" name="city" id="city" value="" class="form-control trigger">
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
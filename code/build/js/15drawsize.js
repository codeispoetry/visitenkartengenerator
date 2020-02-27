$('.size').bind('input propertychange', setDrawsize);
$('#sizepresets').on('change', function () {
    let dimensions = this.value.split(':');
    setDimensions(...dimensions);


});

$('.size').bind('input propertychange', function () {
    // unselect presets, if user changes sizes manually
    $('#sizepresets').val($("#sizepresets option:first").val());
});

function setDrawsize() {
    let factor = 5;
    let width = $('#width').val() * factor;
    let height = $('#height').val() * factor;

    config.width = width;
    config.height = height;

    frontside.size(width, height);
    backside.size(width, height);

    $('.canvas').width(width);
    $('.canvas').height(height);

    backlogo.center();

}

function setDimensions(width, height) {
    $('#width').val(width);
    $('#height').val(height);
    setDrawsize();
}

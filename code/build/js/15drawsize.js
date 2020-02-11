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
    let width = $('#width').val();
    let height = $('#height').val();

    frontside.size(width, height);
    backside.size(width, height);

    $('.canvas').width(width);
    $('.canvas').height(height);

}

function setDimensions(width, height) {
    $('#width').val(width);
    $('#height').val(height);
    setDrawsize();
}

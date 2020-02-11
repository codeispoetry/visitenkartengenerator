$('.download').click(function (e) {

    e.preventDefault();
    $('.downlaod').prop("disabled", true);
    let description = $(this).html();
    $(this).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Augenblick bitte');
    $('.canvas').addClass('opacity');

    let dataFrontside = frontside.svg();
    let dataBackside = backside.svg();
    let format = 'pdf';
    let thisButton = this;

    $.ajax({
        type: "POST",
        url: 'createpic.php',
        data: {svgFrontside: dataFrontside, svgBackside: dataBackside, format: format },
        success: function (data, textStatus, jqXHR) {
console.log("data = " + data);
            let obj = JSON.parse(data);
            $('.download').prop("disabled", false);
            $('.canvas').removeClass('opacity');
            $(thisButton).html(description);
            let downloadname = $('#name').val().toLowerCase();
            downloadname = downloadname.replace(/[ä|ö|ü|ß]/g  ,function(match){
                switch(match){
                    case 'ä':
                        return 'ae';
                    case 'ö':
                        return 'oe';
                    case 'ü':
                        return 'ue';
                    case 'ß':
                        return 'ss';
                }
            });
            downloadname = downloadname.replace(/[^a-zA-Z0-9]/g,'-');
            downloadname = downloadname.replace(/\-+/g,'-');
            downloadname = downloadname.replace(/^\-/g,'');
            downloadname = downloadname.replace(/\-$/g,'');

            window.location.href = 'download.php?file=' + obj.basename + '&downloadname=' + downloadname;
        }
    });
});

// Add your custom JavaScript for storefront pages here.
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
$('body').addClass('loaded');
if($('.page--home').length){
    //mosaico principal
    if(!isMobile){
        $('.page--home > .sections > .banners-grid:first-child .col-12:nth-child(2) > .banner').appendTo('.page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)');
        $('.page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').remove();
        $('.page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)').toggleClass('col-lg-4 col-lg-auto');
        $('.page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').toggleClass('col-lg-4 col-lg-auto');
    }
    //blocos categorias
    $('.banners-grid').each(function(){
        if($(this).find('.col-12').length == 6){
            $('.page--home > .sections > .banners-grid:last-child .col-12').attr('class','col-12 col-md-auto px-1 py-1');
            $('.page--home > .sections > .banners-grid:last-child .row').addClass('justify-content-center align-items-center mx-0');
        }
    })
}

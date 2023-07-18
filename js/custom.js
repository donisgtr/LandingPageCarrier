$(document).ready(function() {

    // device detection
    isMobile = false;
    
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }

    if(!isMobile) {

        $("header").autoHidingNavbar();
    
    }

    if(isMobile) {

        $( "header ul.nav a, header a#vagas-mobile" ).click(function(event) {
            
            $(".sidebar").toggleClass("show hide");
            $('body').toggleClass('back-show back-hidden');
            
            var target = $(this).attr("href");
            var offset = $(target).offset().top - 30;
            $("html, body").animate( { scrollTop: offset }, 500 );
        });



    }

    $(".nav .nav-link").on("click", function(){
       $(".nav").find(".active").removeClass("active");
       $(this).addClass("active");
    });
    
    $(".toggle-menu").click(function() {

        $(".sidebar").toggleClass("show hide");
        $('body').toggleClass('back-show back-hidden');
    
    });

    $(".sidebar").swipe( {
                
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            
            $(".sidebar").toggleClass("show hide");
            $('body').toggleClass('back-show back-hidden');
                        
        },
        
       threshold: 75 // Default is 75px
    });

    vagasSlider = $('.vagas-slider').slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        verticalSwiping: true,
        prevArrow: '<button class="btn btn-sm border bg-white position-absolute mt-3 top-100 start-0  d-flex align-items-center justify-content-center" type="button"><span class="material-symbols-outlined">chevron_left</span></button>',
        nextArrow: '<button class="btn btn-sm border bg-white position-absolute mt-3 top-100 end-0 d-flex align-items-center justify-content-center" type="button"><span class="material-symbols-outlined">chevron_right</span></button>',
        dotsClass: 'pagination position-absolute top-100 start-50 translate-middle-x',
        customPaging : function(vagasSlider, i) {
                //var thumb = $(carouselVagas.$slides[i]).data();
            return '<a class="btn border btn-sm me-2 mt-3 bg-white text-pink fw-bold fs-6">'+i+'</a>';
        },
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    vertical: true,
                    verticalSwiping: true
                }
            }
        ]
    });

    $('#tab button').on('shown.bs.tab', function(e) {
      
      $('.vagas-slider').slick('refresh');
      
    })
    
    $('.tradicao-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="btn position-absolute end-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-dark-blue fs-1">chevron_left</span></button>',
        nextArrow: '<button type="button" class="btn position-absolute start-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-dark-blue fs-1">chevron_right</span></button>',
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.unidades-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.trabalhar-na-carrier-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.valores-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="btn btn-sm position-absolute end-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-white fs-1">chevron_left</span></button>',
        nextArrow: '<button type="button" class="btn btn-sm position-absolute start-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-white fs-1">chevron_right</span></button>',
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.cultura-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="btn btn-sm position-absolute end-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-white fs-1">chevron_left</span></button>',
        nextArrow: '<button type="button" class="btn btn-sm position-absolute start-100 top-50 translate-middle-y bg-transparent" style="z-index: 2;"><span class="material-symbols-outlined text-white fs-1">chevron_right</span></button>',
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.desenvolvimento-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true
    });

    /*
    $('.vagas-slide').slick( {
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        dots: false,
        arrows: true
    });
    */

    $("section.localidades ul li").on("mouseenter", function(){

        $(this).find("p.card-text").css("opacity", "1");

        $("section.localidades ul li").not(this).find("p.card-text").css("opacity", "0");
    })

    $("section.localidades ul li").on("mouseleave", function(){

        $(this).find("p.card-text").css("opacity", "0");
    })

    $("section.localidades ul").on("mouseleave", function(){

        $(this).find("li:nth-child(2) p.card-text").css("opacity", "1");
    })

    AOS.init({disable: 'mobile'});

});


$(document).ready(function() {
    $('select').niceSelect();
});

$(document).ready(function() {
    // welcome-swiper
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        cssMode: true,
        keyboard: true,
        mousewheel: true,
        slidesPerView: 1,
      });
});


$(document).ready(function() {
    //second-swiper
    var swiper = new Swiper('.swiper-container__second', {
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
        keyboard: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 100,
    });
});
$(document).ready(function() {


//custom-radio-check
    $("body").on("click", "label", function(e) {
         var getValue = $(this).attr("for");
         var goToParent = $(this).parents(".radio-wrap");
         var getInputRadio = goToParent.find("input[id = " + getValue + "]");
         console.log(getInputRadio.attr("id"));
    });
});


$("body").on("click", "label", function(e) {
    var getValue = $(this).attr("for");
    var goToParent = $(this).parents(".radio-wrap_second");
    var getInputRadio = goToParent.find("input[id = " + getValue + "]");
    console.log(getInputRadio.attr("id"));
});


var swiper = new Swiper('.article-swiper__container', {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            spaceBetween: 100
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        939: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        639: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },

    },
});







var swiper = new Swiper('.occupation-swiper__container', {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});






// tabs
$(function() {
    $('.tabs-nav a').click(function() {

        //Check if the tabs menu has active class
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        var currentTab = $(this).attr('href');
        $('.tabs-content div').hide();
        $(currentTab).show();

        return false;
    });
});





// mob nav
$('.open-nav').click(function(){
    $('.wrap-nav').addClass('open');
    $('.overlay').addClass('open');
});
$('.close-nav, .overlay, .menu a').click(function(){
    $('.wrap-nav').removeClass('open');
    $('.overlay').removeClass('open');
});



//search
$('#search').on('click',function (e) {
    e.preventDefault();
    $('body').toggleClass('search-open');
});

$('#search-hidden').on('click',function (e) {
    e.preventDefault();
    $('body').toggleClass('search-open');
});


$('div.overlay').on('click',function (){
    $('body').removeClass('search-open');
});



//gallery-swiper
var swiper = new Swiper('.gallery-swiper-container', {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        939: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        639: {
            slidesPerView: 2,
            spaceBetween: 60
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 100,
        },

    },
});




$('[data-fancybox="images"]').fancybox({
    // Options will go here
    arrows: true,
    toolbar: true,
    buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});







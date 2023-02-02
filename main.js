// var navMenu = $('.header__navigation');
// // var navIconFixed = $('.header-nav__icon_fixed');
// var footer = $('.footer');

// // var navIconTop = navIcon.offset().top;
// var footerTop = footer.offset().top

// $(window).on('scroll',function () { //когда наступает событие скролла, мы вызываем function
//         var winScrollTopValue = $(window).scrollTop(); //на сколько скроллим страницу 
        
//         if (winScrollTopValue > navMenu.innerHeight()){
//                 navMenu.addClass ('fixed');
                
//         } else{
//                 navMenu.removeClass ('fixed');
                
//         }

//         if (winScrollTopValue > footerTop) {
//                  navIcon.fadeOut(300); //increase the opacity from to 0 to 1 in 800ms
//         } else if (winScrollTopValue < footerTop) {
//                 navIcon.fadeIn (300);
//         }
//  });

function openModalWindow() {
        const shadowOverlay = document.getElementById ('form-shadow-overlay');
        shadowOverlay.classList.add('active');
}       

function closeModalWindow() {
        const shadowOverlay = document.getElementById ('form-shadow-overlay');
        shadowOverlay.classList.remove('active');
}  


function openSideMenuHome () {
        const sideMenu = document.querySelector ('.side-menu_home');
        const backdrop = document.querySelector ('.backdrop_home');
        sideMenu.classList.add('active');
        backdrop.classList.add('active');
}

function openSideMenuGallery () {
        const sideMenu = document.querySelector ('.side-menu_gallery');
        const backdrop = document.querySelector ('.backdrop_gallery');
        sideMenu.classList.add('active');
        backdrop.classList.add('active');
}

function openSideMenuBookReviews () {
        const sideMenu = document.querySelector ('.side-menu_book-reviews');
        const backdrop = document.querySelector ('.backdrop_book-reviews');
        sideMenu.classList.add('active');
        backdrop.classList.add('active');
}

function openSideMenuForm () {
        const sideMenu = document.querySelector ('.side-menu_form');
        const backdrop = document.querySelector ('.backdrop_form');
        sideMenu.classList.add('active');
        backdrop.classList.add('active');
}

function openSideMenuAbout () {
        const sideMenu = document.querySelector ('.side-menu_about');
        const backdrop = document.querySelector ('.backdrop_about');
        sideMenu.classList.add('active');
        backdrop.classList.add('active');
}


function closeSideMenu (element) {
        element.parentElement.classList.remove('active');
}





function openBookReviewFirst () {
        const open = document.querySelector ('.book-review_opened_1');
        open.classList.add ('active');
}

function openBookReviewSecond () {
        const open = document.querySelector ('.book-review_opened_2');
        open.classList.add ('active');
}

function openBookReviewThird () {
        const open = document.querySelector ('.book-review_opened_3');
        open.classList.add ('active');
}

function openBookReviewFourth () {
        const open = document.querySelector ('.book-review_opened_4');
        open.classList.add ('active');
}

function openBookReviewFifth () {
        const open = document.querySelector ('.book-review_opened_5');
        open.classList.add ('active');
}

function openBookReviewSixth () {
        const open = document.querySelector ('.book-review_opened_6');
        open.classList.add ('active');
}

function openBookReviewSeventh () {
        const open = document.querySelector ('.book-review_opened_7');
        open.classList.add ('active');
}

function openBookReviewEighth () {
        const open = document.querySelector ('.book-review_opened_8');
        open.classList.add ('active');
}

function closeBookReview (element) {
        element.parentElement.parentElement.classList.remove('active');
}

function closeBookReviewOverlay (element) {
        element.parentElement.classList.remove ('active');
}



if ($('.book-review__slider').length > 0){
        $('.book-review__slider').slick({
              
              dots: true,
              slidesToShow: 1,
              
              infinite:true,
              arrows:true,
              prevArrow: "<button type=\"button\"  class=\"btn_prev\"></button>",
              nextArrow: "<button type=\"button\"  class=\"btn_next\"></button>",
        //       responsive: [
        //         {
        //           breakpoint: 768,
        //           settings: {
        //                dots:false,
        //           }
        //         },]
              });
}

if ($('.arts-home__slider').length > 0){
        $('.arts-home__slider').slick({
              
              dots: true,
              slidesToShow: 1,
              
              infinite:false,
              arrows:true,
              prevArrow: "<button type=\"button\"  class=\"btn_prev\"></button>",
              nextArrow: "<button type=\"button\"  class=\"btn_next\"></button>",
             
              });
}

if ($('.quote-slider').length > 0){
       $('.quote-slider').slick({
              autoplay:true,
              autoplaySpeed: 3500,
              dots: false,
              infinite: true,
              fade: true,
              cssEase: 'linear',
              arrows:false,
            });
}

if ($('.feedback-slider').length > 0){
       $('.feedback-slider').slick({
             
             dots: false,
             slidesToShow: 2,
             autoplay:true,
             autoplaySpeed: 3500,
             infinite:true,
             arrows:true,
             prevArrow: "<button type=\"button\"  class=\"btn_prev\"></button>",
             nextArrow: "<button type=\"button\"  class=\"btn_next\"></button>",
             responsive: [
              {
                breakpoint: 768,
                settings: {
                     slidesToShow: 1,
                }
              },]
             });
}

var toTop = $(".to-top-btn");
var halfHeaderHeight = $('.header').innerHeight() / 2;


$(window).on('scroll',function () {
        var winScrollTopValue = $(window).scrollTop(); //на сколько скроллим страницу 

        if (winScrollTopValue > halfHeaderHeight) {
                toTop.fadeIn(800);
        } else if (winScrollTopValue < halfHeaderHeight) {
                toTop.fadeOut(800);
        }
 });

toTop.on('click', toTopClicked);
function toTopClicked (event) {
        event.preventDefault();
                

        //If this method is called, the default action of the event will not be triggered.

        $('html, body').animate({ scrollTop: 0 }, 600);
}
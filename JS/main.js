//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).ready(function() {




    $('.color-faq').click(function() {
        $('.color-faq').removeClass('active');
        $(this).addClass('active');
    });
    $('.faq-text .item').first().show();
    $('.color-faq').click(function() {
        let indexofColorfaq = $(this).index();
        $('.faq-text .item').hide();
        $('.faq-text .item').eq(indexofColorfaq).show();
    });




    // faq test-1

    $('.click1').click(function() {
        $('.faq-text ul li.click1').toggleClass('style-li');
        $('.faq-text ul li.click1 .icon-minus').toggle();
        $('.faq-text ul li.click1 .icon-plus').toggle();
        $('.faq-text ul li.click1 + .ul-text').slideToggle();
    });
    $('.click2').click(function() {
        $('.faq-text ul li.click2').toggleClass('style-li');
        $('.faq-text ul li.click2 .icon-minus').toggle();
        $('.faq-text ul li.click2 .icon-plus').toggle();
        $('.faq-text ul li.click2 + .ul-text').slideToggle();
    });
    $('.click3').click(function() {
        $('.faq-text ul li.click3').toggleClass('style-li');
        $('.faq-text ul li.click3 .icon-minus').toggle();
        $('.faq-text ul li.click3 .icon-plus').toggle();
        $('.faq-text ul li.click3 + .ul-text').slideToggle();
    });
    $('.click4').click(function() {
        $('.faq-text ul li.click4').toggleClass('style-li');
        $('.faq-text ul li.click4 .icon-minus').toggle();
        $('.faq-text ul li.click4 .icon-plus').toggle();
        $('.faq-text ul li.click4 + .ul-text').slideToggle();
    });
    $('.click5').click(function() {
        $('.faq-text ul li.click5').toggleClass('style-li');
        $('.faq-text ul li.click5 .icon-minus').toggle();
        $('.faq-text ul li.click5 .icon-plus').toggle();
        $('.faq-text ul li.click5 + .ul-text').slideToggle();
    });
    $('.click6').click(function() {
        $('.faq-text ul li.click6').toggleClass('style-li');
        $('.faq-text ul li.click6 .icon-minus').toggle();
        $('.faq-text ul li.click6 .icon-plus').toggle();
        $('.faq-text ul li.click6 + .ul-text').slideToggle();
    });




});
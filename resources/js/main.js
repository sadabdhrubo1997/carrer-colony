// code for extra large responsive

let myHtmlElement = document.querySelector("html")




// Responsive html font size
const iw = window.innerWidth;
const rootScreenWidth = 1366;
const rootFontPercentage = 44.46;
if (iw > 1366) {
    console.log(iw);
    let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`)
} else {
    myHtmlElement.setAttribute("style", `font-size:${rootFontPercentage}%`)
}

window.addEventListener("resize", function () {
    if (iw > 1366) {
        console.log(iw);
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`)
    } else {
        myHtmlElement.setAttribute("style", `font-size:${rootFontPercentage}%`)
    }

})



// Responsive html font size end



$('#serviceSliderWrapper').slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $(".serviceSliderPrevBtn"),
    nextArrow: $(".serviceSliderNextBtn"),
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
})

$("#testimonialSlider").slick({
    arrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '50rem',
    dots: true,
})

$("#heroSlider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true
})

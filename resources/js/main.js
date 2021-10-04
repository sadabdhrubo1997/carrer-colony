// code for extra large responsive

let myHtmlElement = document.querySelector("html")

window.addEventListener("load", function () {


    // Responsive html font size
    const iw = window.innerWidth;
    const rootScreenWidth = 1366;
    const rootFontPercentage = 44.46;
    if (iw<= 1366) {
        myHtmlElement.setAttribute("style", `font-size:${rootFontPercentage}%`)
    }

    else{

        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`)
    }

})

window.addEventListener("resize", function () {
  
    const iw2 = window.innerWidth;
    const rootScreenWidth2 = 1366;
    const rootFontPercentage2 = 44.46;


    let currentFontSize = (rootFontPercentage2 * iw2) / rootScreenWidth2;
    myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`)

})



// Responsive html font size end



$('#serviceSliderWrapper').slick({
    arrow: true,
    autoplay:true,
    autoplaySpeed:5000,
    prevArrow: $(".serviceSliderPrevBtn"),
    nextArrow: $(".serviceSliderNextBtn"),
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
})

$("#testimonialSlider").slick({
    arrow: false,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '50rem',
    dots: true,
})

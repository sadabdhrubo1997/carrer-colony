// code for extra large responsive

function setScreenJsResponsive() {
  let myHtmlElement = document.querySelector("html")
  const ow = window.outerWidth;
  const rootScreenWidth = 1366;
  const rootFontPercentage = 44.46;
//   console.log(ow);
  if (ow >= 1366) {
    let currentFontSize = (rootFontPercentage * ow) / rootScreenWidth;
    myHtmlElement.setAttribute("style", `font-size:${currentFontSize}%`)

  } else {
    myHtmlElement.setAttribute("style", `font-size:${rootFontPercentage}%`)
  }
}

setScreenJsResponsive()

// Responsive html font size

window.addEventListener("resize", () => {
    setScreenJsResponsive()
})

// Responsive html font size end
function el(selector){
  return document.querySelector(selector)
}

$('#serviceSliderWrapper').slick({
  arrow: true,
  autoplay: false,
  autoplaySpeed: 5000,
  prevArrow: $(".serviceSliderPrevBtn"),
  nextArrow: $(".serviceSliderNextBtn"),
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrow:false,
        prevArrow: "",
        nextArrow: "",
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



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
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerPadding: '0rem',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrow:false,
        prevArrow: "",
        nextArrow: "",
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerPadding: '0rem',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrow:false,
        prevArrow: "",
        nextArrow: "",
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$("#heroSlider").slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  autoplay: true
})



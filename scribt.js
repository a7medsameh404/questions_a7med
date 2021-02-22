

let morganOffsetTop = $("#about").offset().top

$(window).scroll(function(){

    let wScroll = $(window).scrollTop()
    if(wScroll > morganOffsetTop)
    {
       $("nav").css("backgroundColor" , "rgba(0 ,0 ,0 ,0.7)" , "width","100%") 

    }
})

$("a").not("a[href^='http']")

$("a").click(function(){

    let aHref = $(this).attr("href")
    let sectionLink = $(aHref).offset().top
    $("html,body").animate({scrollTop:sectionLink},1500)
})



// $("a").click(function(){

//     let aHref = $(this).attr("href")
//     let sectionoff = $(aHref).offset().top
//     $("html,body").animate({scrollTop:sectionoff},1500)
// })
//changes color of nav links on hover//
$(document).ready(function() {
  $("a").hover(function() {
    $(this).css("color", "#cf9963");
    $(this).css("font-weight", "bold");
  });
  $("a").mouseout(function() {
    $(this).css("color", "white");
    $(this).css("font-weight", "normal");
  });
  // $("a #nav").mouseover(function() {
  //   $(this).css("color", "#cf9963");
  //   $(this).css("font-weight", "bold");
  // });
  // $("a #nav").mouseout(function() {
  //   $(this).css("color", "black");
  //   $(this).css("font-weight", "normal");
  // });



//ariel lee animation jumbotron//
  $(function(){
    var oldtext;
    $("#hoverelement").hover(function(){
      $(this).text("creative");
    $(this).mouseout(function(){
      $(this).text("ariel lee");
    $(this).hover(function(){
      $(this).text("artsy");
    $(this).mouseout(function(){
      $(this).text("ariel lee");
    $(this).hover(function(){
      $(this).text("passionate");
    $(this).mouseout(function(){
      $(this).text("ariel lee");
    $(this).hover(function(){
      $(this).text("authentic");
          });
        });
        });
      });
      });
    });
  });
});


//ariel lee short bio animation//
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $("text");
  console.log(scroll);
  if (scroll < 130){
    hideMe.css("display","none");
  }
  else if (scroll > 130){
    hideMe.css("display", "block");
  }
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $("p");
  console.log(scroll);
  if (scroll < 370){
    hideMe.css("opacity","0");
  }
  else if (scroll > 370){
    hideMe.css("opacity", "1");
    $("p").css({"position":"relative","opacity": 0, "top":"+=80"});
     $("p").animate({top:0, opacity:1},1000);
  }
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $(".ContactButton");
  console.log(scroll);
  if (scroll < 585){
    hideMe.css("opacity","0");
  }
  else if (scroll > 585){
    hideMe.css("opacity", "1");
    $(".ContactButton").css({"position":"relative","opacity": 0, "right":"+=100"});
     $(".ContactButton").animate({right:0, opacity:1},1000);

  }
});


//FEATURED SECTION//
//featuredtitle animation//
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $(".FeaturedTitle");
  console.log(scroll);
  if (scroll < 730){
    hideMe.css("opacity","0");
  }
  else if (scroll > 730){
    hideMe.css("opacity", "1");
    $(".FeaturedTitle").css({"position":"relative","opacity": 0, "right":"+=100"});
     $(".FeaturedTitle").animate({right:0, opacity:1},1000);

  }
});

//featured boxes animation//
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $(".Box");
  console.log(scroll);
  if (scroll < 930){
    hideMe.css("opacity","0");
  }
  else if (scroll > 930){
    hideMe.css("opacity", "1");
    $(".Box").css({"position":"relative","opacity": 0, "top":"+=250"});
     $(".Box").animate({top:0, opacity:1},1500);
  }
});

//MORE> animation//
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var hideMe = $(".MORE");
  console.log(scroll);
  if (scroll < 1230){
    hideMe.css("opacity","0");
  }
  else if (scroll > 1230){
    hideMe.css("opacity", "1");
    $(".MORE").css({"position":"relative","opacity": 0, "right":"+=300"});
     $(".MORE").animate({right:0, opacity:1},2000);
  }
});




//landing text animation//
$(document).ready(function () {
    $("h1.toshow").fadeIn(3500);
});

function blurb() {
$(".Blurb").css({"position":"relative","opacity": 0, "right":"+=100","visibility":"visible"});
$(".Blurb").animate({"right":0, "opacity":1},1500);
}
  setTimeout(blurb, 1900);


function enter(){
  $("#buttonId").css({"position":"relative","opacity": 0, "right":"+=100", "visibility":"visible"});
  $("#buttonId").animate({"right":0, "opacity":1},1500);
}
setTimeout(enter, 2800);



//enter button animation then url redirect//
$("#buttonId").click(function() {
  $(".Body").fadeOut();
  $(".LandingBackground").animate({"zoom":"9000%"}, 9000);
    setTimeout(function(){window.location="index.html";}, 500);
});


//contact me form//
// $(document).ready(function(){
//     $("#formButton").click(function(){
//         $("#form1").toggle();
//     });
// });

});

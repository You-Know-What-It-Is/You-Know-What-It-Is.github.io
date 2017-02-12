$(document).ready(function () {
   $('#B1').html(' ');
   $('#B2').click(function () {Start();});
   $("#B3").html(' ');
   $('#B4').html(' ');
   Asth();
 });
 
 //All The Important Non-Important Stuff
 
 function Asth() {
   $('#B1').mouseover(function () {
     $('#B1').fadeOut('400');
     $('#B1').fadeIn('400');
   });
   $('#B2').mouseover(function () {
     $('#B2').fadeOut('400');
     $('#B2').fadeIn('400');
   });
   $('#B3').mouseover(function () {
     $('#B3').fadeOut('400');
     $('#B3').fadeIn('400');
   });
     $('#B4').mouseover(function () {
     $('#B4').fadeOut('400');
     $('#B4').fadeIn('400');
   });
 };
 
 //What Starts The Questions "Real Suprising Huh"
 
 function Start() {
 
     $('.Title').html('Sooooo Like Which One You Gonna Be').ready(function () {
       Q1();  //Me Calling Function Q1
     });
 };
 
 //Question 1
 
 function Q1() {
   
   $('#B1').css("left", "48");
   $('#B2').css("left", "48");
 
   $('#B1').html('Bacon, Egg And Cheese To My Arizona').click(function () {
     Q2();
     $.A1 = "Bacon, Egg And Cheese To My Arizona"; //Sets The Answer In $.A1
   });
   
   $('#B2').html('Arizona To My Bacon, Egg And Cheese').click(function () {
     Q2();
     $.A1 = "Arizona To My Bacon, Egg And Cheese"; //Sets The Answer In $.A1
   });
   
   $("#B3").html(' ');
   $('#B4').html(' ');
 };
 
 function Q2() {
 
   $('#B1').css("left", "235");
   $('#B2').css("left", "210");
   //$('#B3').css("font-size", "26");
   $('#B3').css("left", "32");
   $('#B4').css("left", "100");
   
   $('.Title').html('Alright Now With The Bad Pick-Up Line Out Of The Way, How Was Your Day')
   
   $('#B1').html('Its Been Great').click(function () {
     
     $.A2 = "Hope I Don\'t Ruin Your Great Day By Asking You Out";
     Q3();
   });
 
     $('#B2').html('I Mean It Was Ok').click(function () {
     $.A2 = "Well This May Either Make Or Break Your Day, But You Wanna Date...?";
     Q3();
   });
   
   $('#B3').html('A Good Day? Why I Haven\'t Heard That Name In Years').click(function () {
     $.A2 = "Why Let Me Further Ruin Your Day By Asking You Out";
     Q3();
   });
 
   $('#B4').html('It Was Amazing, Then I Woke Up').click(function () {
     $.A2 = "Oh Well Then You Might Be Pleased To Hear That Someone Is Trying To Ask You Out (Me In Case You Couldn\'t Tell)";
     Q3();
   });
  };
 
  function Q3() {
   
   $('#B1').css("left", "150");
   $('#B2').css("left", "220");
   //$('#B3').css("font-size", "18");
   $('#B3').css("left", "15");
   //$('#B4').css("font-size", "22");
   $('#B4').css("left", "30");
   
   $('.Title').html($.A2);
   
   $('#B1').html('Thought You\'d Never Ask!').click(function () {
     $.A3 = "You\'ve Been Waiting For This To Happen, Why Thats Just About The Funniest Joke I\'ve Heard In A While";
     $.X = "So We're A Thing Now....Wanna Catch A Movie";
     Q4();
   });  
    $('#B2').html('Umm Yea I Guess').click(function () {
     $.A3 = "Oh Well Than I Ran Out Of Questions, Honestly I Didn\'t Think I\'d Get This Far, Give Me Some Time To Think";
     $.X = "So We're A Thing Now....Wanna Catch A Movie";
     Q4();
   });
 
   $('#B3').html('Give Me A Day Or Tw-, A Month O-, A Year Or Tw-, You Know What Next Question ').click(function () {
     $.A3 = "Ummmmm Lol Rip The Dream...";
     $.X = "Well This Is Wierd";
     Q4();
   });
 
   $('#B4').html('Lol Wheres The Camera This Is Gonna Go Viral, It\'s A Prank Right?').click(function () {
     $.A3 = "Ha Yea Totally Just A Prank...";
     $.X = "Well This Is Wierd";
     Q4();
   });
 };
 
 function Q4() {
 
   $('.Title').html($.A3);
   
   $('#B1').html(' ');
   $('#B2').html($.X);
   $('#B3').html(' ');
   $('#B4').html(' ');
 
 }; 

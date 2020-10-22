$(document).ready(function () {
  $(".accident").mouseover(function () {
      $("#accident").show()
  });
  $(".accident").mouseout(function () {
    $("#accident").hide()
});
$(".fire").mouseover(function () {
    $("#fire").show()
});
$(".fire").mouseout(function () {
  $("#fire").hide()
});
$(".cancer").mouseover(function () {
    $("#cancer").show()
});
$(".cancer").mouseout(function () {
  $("#cancer").hide()
});
$(".floods").mouseover(function () {
    $("#floods").show()
});
$(".floods").mouseout(function () {
  $("#floods").hide()
});
$(".famine").mouseover(function () {
    $("#famine").show()
});
$(".famine").mouseout(function () {
  $("#famine").hide()
});
$(".draught").mouseover(function () {
    $("#draught").show()
});
$(".draught").mouseout(function () {
  $("#draught").hide()
});
$("#natural").click(function() {
    $("#form").show();

});
$("#natural").click(function() {
    $(".form1").hide();

});
$("#man").click(function() {
    $(".form1").show();
    
});
$("#man").click(function() {
    $("#form").hide();
    
});
$(".form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    if (name === "") {
        alert( "please enter your Name")
    } else 
    if(email === ""){
        alert ("please enter your Email")
        
    }else
    if(phone === ""){
        alert ("please enter your Phone Numpe")
    }else
    if(state === ""){
        alert ("please enter your state")
    }else
    if(city === ""){
        alert ("please enter your city")
    }else
    if(location === ""){
        alert ("please enter you Location")

    }else
     if(disaster ==="" ){
        alert ("please select the typ of Disaster ")
     }
     else{
 alert ("dear" + name + "")
     }
});
$("#form1").submit(function (event) {
    event.preventDefault();
    var name2 = $("#name1").val();
    if (name1 === "") {
        alert( "please enter your Name")
    } else 
    if(email1 === ""){
        alert ("please enter your Email")
        
    }else
    if(phone1 === ""){
        alert ("please enter your Phone Numpe")
    }else
    if(state1 === ""){
        alert ("please enter your state")
    }else
    if(city1 === ""){
        alert ("please enter your city")
    }else
    if(location1 === ""){
        alert ("please enter you Location")

    }else
     if(disaster1 ==="" ){
        alert ("please select the typ of Disaster ")
     }
     else{
   alert ("Dear" + name2 +"we ")
//    console.log(ffgggg);
//    console.log(name2)
   }
});
});
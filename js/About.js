$(document).ready(function(){
    $("#port1").mouseover(function(){
      $("#overlay1").show();       
    }).mouseout(function(){
       $("#overlay1").hide();
    });
});
$(document).ready(function(){
    $("#port2").mouseover(function(){
      $("#overlay2").show();       
    }).mouseout(function(){
       $("#overlay2").hide();
    });
});
$(document).ready(function(){
    $("#port3").mouseover(function(){
      $("#overlay3").show();       
    }).mouseout(function(){
       $("#overlay3").hide();
    });
});
$(document).ready(function(){
    $("#port4").mouseover(function(){
      $("#overlay4").show();       
    }).mouseout(function(){
       $("#overlay4").hide();
    });
});
$(document).ready(function(){
    $("#port5").mouseover(function(){
      $("#overlay5").show();       
    }).mouseout(function(){
       $("#overlay5").hide();
    });
});
$(document).ready(function(){
    $("#port6").mouseover(function(){
      $("#overlay6").show();       
    }).mouseout(function(){
       $("#overlay6").hide();
    });
});

$(document).ready(function(){
    $("form#form47").submit(function(event){
      event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  });
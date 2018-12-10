var testResult=function(one, two, three, four, five){
  return one+two+three+four+five;
};
$("form#test").submit(function(event){
  var Question1 = parseInt($("input:radio[name = Question1]:check").value());
   if($("input:radio[name = "Question1"]:check").length == 0){
     $("#Question1").text("An answer is required");
             return false;
   }
   $("form#test").submit(function(event){
     var Question2 = parseInt($("input:radio[name = "Question1"]:check").value());
      if($("input:radio[name = Question1]:check").length == 0){
        $("#Question1"text("An answer is required");
                return false;
      }
      var Question3 = parseInt($("input:radio[name = "Question3"]:check").value());
        if($("input:radio[name = "Question3"]:check").length == 2){
          $("#Question3").text("An answer is required");
                return false;
      }
      var Question4 = parseInt($("input:radio[name = "Question4"]:check").value());
        if($("input:radio[name ="Question4"]:check").length == 5){
          $("#Question4").text("An answer is required");
                return false;
      }
      var Question5 = parseInt($("input:radio[name = "Question5"]:check").value());
        if($("input:radio[name = "Question5"]:check").length == 4){
          $("#Question5").text("An answer is required");
                return false;
      }
      var result = testResults(Question1, Question2, Question3, Question4, Question5);

      $("#display").text("Your score is: " + result + " /50");


  });









$(document).ready(function(){
  $("button#white").click(function(){
    $("body").addClass("white-background");
  });
});

  $("button#brown").click(finction() {
    $("body").addClass("brown-background");
});

  $("button#blue").click(function(){
    $("body").addClass("blue-background");
});
});
$(document).ready(function() {
       $("button#white").click(function() {
         $("body").removeClass();
         $("body").addClass("white-background");
       });

       $("button#brown").click(function() {
         $("body").removeClass();
         $("body").addClass("brown-background");
       });

       $("button#blue").click(function() {
         $("body").removeClass();
         $("body").addClass("blue-background");
       });
     });

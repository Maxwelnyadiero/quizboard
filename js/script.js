$(document).ready(function(){
  $("form#quiz").submit(function(event){
  var questions=$("input:radio[name=question1].ckecked".value();
    var questions=$("input:radio[name=question2].ckecked".value();
      var questions=$("input:radio[name=question3].ckecked".value();
      var questions=$("input:radio[name=question4].ckecked".value();
 var questions=$("input:radio[name=question5].ckecked".value();
 var result=parseInt(question1)+(question2)+(question3)+(question3)+(question4)+(question5)
 $("#result").test ("your score:" + result + "%");
 $("button").click (function(){
   $("#result.showing").toggle();
 })
 $("form#question ").show();
 $("#result").show();
 event.preventDefault();
});
});
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
      $("body").addClass("red-background"));
  });
});

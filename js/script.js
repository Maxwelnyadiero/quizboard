(function(){
var questions = [{
  question:"what is 15*7?",
  choices: [100, 105, 125, 115],
  correctAnswer:
  1
}, {
  question:
  "what is 20*5?",
  choices: [50, 60, 102, 100],
  correctAnswer:
  3
}, {
  question:
  "what is 16*5?",
  choices: [70, 80, 90, 75],
  correctAnswer:
  1
}, {
  question:
  "what is the other name of javascript",
  choices: ['vue', 'array', 'ECMAScript'],
  correctAnswer:
}, {
  question:
  "what is 10*50?",
  choices: [500, 0, 50, 5000],
  correctAnswer:
  0
},
}]









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

parseInt(questionThree) + parseInt(questionFour) + parseInt(questionFive);
  $("#result").text("You Score: " + result + "%");

  $("button").click(function(){
    $("#result-showing").toggle();
  })
  $("form#quiz").show();
  $("#result").show();
  event.preventDefault();
});
});
<form id="quiz" action="index.html" method="post">
          <ol>
            <li>
              <p>Which is not a data type?</p>
            </li>
            <div class="radio">
              <input type="radio" name="questionOne" value="0">
              Undefined
            </div>
            <div class="radio">
              <input type="radio" name="questionOne" value="0">
              Strings
            </div>
            <div class="radio">
              <input type="radio" name="questionOne" value="20">
              Defined
            </div>
            <li>
              <p>What does "10===9" return on the JS console?</p>
            </li>
            <div class="radio">
              <input type="radio" name="questionTwo" value="0">
              Nan
            </div>
            <div class="radio">
              <input type="radio" name="questionTwo" value="0">
              True
            </div>
            <div class="radio">
              <input type="radio" name="questionTwo" value="20">
              False
            </div>
            <li>
              <p>Which option represents the method concat()?</p>
            </li>
            <div class="radio">
              <input type="radio" name="questionThree" value="20">
              "x"+"y"
            </div>
            <div class="radio">
              <input type="radio" name="questionThree" value="0">
              'y'*'x'
            </div>
            <div class="radio">
              <input type="radio" name="questionThree" value="0">
              "x/y"
            </div>
            <li>
              <p>Select the correctly declared variable.</p>
            </li>
            <div class="radio">
              <input type="radio" name="questionFour" value="0">
              var mYschool = ["moringa", "andela", "iHub"]
            </div>
            <div class="radio">
              <input type="radio" name="questionFour" value="20">
              var herFruits = ["apple","orange","peach"]
            </div>
            <div class="radio">
              <input type="radio" name="questionFour" value="0">
              var HisNames = ["ngure", "boro", "chrispus"]
            </div>
            <li>
              <p>Which method inserts text into the bottom of a list?</p>
            </li>
            <div class="radio">
              <input type="radio" name="questionFive" value="0">
              .prepend ( )
            </div>
            <div class="radio">
              <input type="radio" name="questionFive" value="20">
              .append ( )
            </div>
            <div class="radio">
              <input type="radio" name="questionFive" value="0">
              .slideDown ( )


Maxwel Nyadiero [1:11 PM]
0

function check(){ 
    var score = 0;
    var right_answer_1 = document.getElementById("q1-a1")
    var q1_answer_2= document.getElementById("q1-a2")
    var q1_answer_3= document.getElementById("q1-a3")
    var q1_answer_4= document.getElementById("q1-a4")

    if (right_answer_1.checked == true){
      score++
    
    alert("Q1 answer is right")
}
else{
    alert("Q1 answer is not right")
}



var right_answer_2 = document.getElementById("q2-a3")
var q2_answer_2= document.getElementById("q2-a2")
var q2_answer_1= document.getElementById("q2-a1")
var q2_answer_4= document.getElementById("q1-a4")

if (right_answer_2.checked == true){
  score++

alert("Q2 answer is right")
}
else{
alert("Q2 answer is not right")
}


var right_answer_3 = document.getElementById("q3-a4")
var q3_answer_2= document.getElementById("q3-a2")
var q3_answer_3= document.getElementById("q3-a3")
var q3_answer_1= document.getElementById("q3-a1")

if (right_answer_3.checked == true){
  score++

alert("Q3 answer is right")
}
else{
alert("Q3 answer is not right")
}





var right_answer_4 = document.getElementById("q4-a4")
var q4_answer_2= document.getElementById("q4-a2")
var q4_answer_3= document.getElementById("q4-a3")
var q4_answer_1= document.getElementById("q4-a1")

if (right_answer_4.checked == true){
  score++

alert("Q4 answer is right")
}
else{
alert("Q4 answer is not right")
}





var right_answer_5 = document.getElementById("q5-a1")
var q5_answer_2= document.getElementById("q5-a2")
var q5_answer_3= document.getElementById("q5-a3")
var q5_answer_1= document.getElementById("q5-a4")

if (right_answer_5.checked == true){
  score++

alert("Q5 answer is right")
}
else{
alert("Q5 answer is not right")
}








var right_answer_6 = document.getElementById("q6-a2")
var q6_answer_3= document.getElementById("q6-a3")
var q6_answer_4= document.getElementById("q6-a4")
var q6_answer_1= document.getElementById("q6-a1")

if (right_answer_6.checked == true){
  score++

alert("Q6 answer is wright")
}
else{
alert("Q6 answer is not wright")
}

var right_answer_7 = document.getElementById("q7-a4")
var q7_answer_2= document.getElementById("q7-a2")
var q7_answer_3= document.getElementById("q7-a3")
var q7_answer_1= document.getElementById("q7-a1")

if (right_answer_7.checked == true){
  score++

alert("Q7 answer is right")
}
else{
alert("Q7 answer is not right")
}
alert("your score is " + score++*10 +"")
}

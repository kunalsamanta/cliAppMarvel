var readlineSync= require("readline-sync");
var score=0;
var userName= readlineSync.question("what is your name?");
console.log("welcome "+ userName+" to marvel quize.");
console.log("you have to answer the question one by one. if you get 7 out of 10 you will enter next lavel. Lets start");
function game(question,answer){
  var getAnswer= readlineSync.question(question)
  if (getAnswer === answer){
    console.log("right");
    score = score+1;
  }
  else{
    console.log("wrong");
  }
}
console.log("your score is "+score);
var questions=[{
  question:"Who is Iron Man?",
  answer: "tony stark"
},{
  question:"who is HULK?",
  answer:"bruce"
  
},{
  question:"Thor is god of____?",
  answer:"thunder"
},{
  question:"who is the most powerful hero?",
  answer:"dr strange"
},{
  question:"who is the father of thor?",
  answer:"odin"
},{
  question:"how may heros play in first avanger movie?",
  answer:"6"
},{
  question:"who is the villine in first avanger movie?",
  answer:"loki"
},{
  question:"who is the main villine?",
  answer:"thanos"
},{
  question:"who is in quantum space?",
  answer:"ant man"
},{
  question:"in which movie iron man and captain america fight with each other?",
  answer:"cevil ware"
}
  
]
for (var i=0; i <questions.length; i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
}
console.log("your current score is "+ score);
if(score>=7){
console.log("congratulation! you qulify for the next lavel");
function game(question,answer){
  var getAnswer= readlineSync.question(question)
  if (getAnswer === answer){
    console.log("right");
    score = score+1;
  }
  else{
    console.log("wrong");
  }
}
console.log("your score is "+score);
var questions=[{
  question:"Who is Iron Man?",
  answer: "tony stark"
},{
  question:"who is HULK?",
  answer:"bruce"
  
},{
  question:"Thor is god of____?",
  answer:"thunder"
},{
  question:"who is the most powerful hero?",
  answer:"dr strange"
},{
  question:"who is the father of thor?",
  answer:"odin"
},{
  question:"how may heros play in first avanger movie?",
  answer:"6"
},{
  question:"who is the villine in first avanger movie?",
  answer:"loki"
},{
  question:"who is the main villine?",
  answer:"thanos"
},{
  question:"who is in quantum space?",
  answer:"ant man"
},{
  question:"in which movie iron man and captain america fight with each other?",
  answer:"cevil ware"
}
  
]
for (var i=0; i <questions.length; i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)
}
console.log("your current score is "+ score);

}
else{
  console.log("you are not qulified for next lavel")
}
var questions=[{
question:"How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
option1:"More than 50",
option2:"More than 100",
option3:"More than 150",
option4:"More than 200",
answer:4,
answered:false,
check:null,
scores:0
},
{
question:"Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
option1:"Monkeys",
option2:"Lizards",
option3:"Hens",
option4:"Kites",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"Which of the following diseases are related to coronavirus?",
option1:"MERS",
option2:"SARS",
option3:"Both A and B",
option4:"Neither A nor B",
answer:3,
answered:false,
check:null,
scores:0
},
{
question:"The first case of novel coronavirus was identified in-",
option1:"Beijing",
option2:"Shanghai",
option3:"Wuhan, Hubei", 
option4:"Tianjin",
answer:3,
answered:false,
check:null,
scores:0
},
{
question:"For how long should you wash your hands to kill the coronavirus disease (COVID-19)?",
option1:"5 seconds",
option2:"20 seconds",
option3:"10 seconds",
option4:"8 seconds",
answer:2,
answered:false,
check:null,
scores:0
},
{
question:"From where coronavirus got its name?",
option1:"Due to their crown-like projections",
option2:"Due to their leaf-like projections",
option3:"Due to their surface structure of bricks",
option4:"None of the above",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"How long does the novel coronavirus survive outside the body?",
option1:"A week in the air and on surfaces",
option2:"Several hours to days",
option3:"Up to a two and a half weeks",
option4:"None",
answer:2,
answered:false,
check:null,
scores:0
},
{
question:"What is the safe distance to stay apart from someone who is sick?",
option1:"Atleast 3 feet (1 meter)",
option2:"Atleast 1 foot (30 cm)",
option3:"10 cm",
option4:"20 cm",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"Can you catch the coronavirus disease (COVID-19) from your pet?",
option1:"Yes",
option2:"Only from dogs",
option3:"Only from cats",
option4:"No",
answer:4,
answered:false,
check:null,
scores:0
},
{
question:"What percentage alcohol in hand rubs and disinfectants is needed to kill the coronavirus disease (COVID-19)?",
option1:"40%",
option2:"60%",
option3:"10%",
option4:"1%",
answer:2,
answered:false,
check:null,
scores:0
}
];

var addscore=[];
var count=0;
var prevCount=0;
var quesCount=0;
var currentQues={};
var shuffledQues=[];
var prevIndex;
var answers=[];
var finalScore=0;
var index1;
var index=0;
var randomIndex;

var scoreContainer=document.getElementById("scoreContainer");
var body=document.querySelector("body");
var quiz=document.getElementById("quiz");
var result=document.getElementById("result");
var ques=document.getElementById("ques");
var op1=document.getElementById(1);
var op2=document.getElementById(2);
var op3=document.getElementById(3);
var op4=document.getElementById(4);
var ansMessage=document.getElementById("ans");
var options=document.getElementsByClassName("options");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const submit=document.getElementById("submit");
const startbtn=document.getElementById("start");
const name=document.getElementById("name");
var username=document.getElementById("myname");


function shuffle(arr1)
{
  var len=arr1.length,index,temp;
  while(len>0)
  {
    index=Math.floor(Math.random()*len);
    len--;
    temp=arr1[len];
    arr1[len]=arr1[index];
    arr1[index]=temp;
   }
   return(arr1);
}   
var arr=[];
for(i=0;i<=9;i++)
{
  arr.push(i);
}
var randomNo=shuffle(arr);

for(var i of randomNo){
	shuffledQues.push(questions[i]);
}

var num=1;
shuffledQues.forEach(function (element) {
	
	for(i=10;i>=num;i--){
  	element.number = i;
 	}
 	num++;
});


startbtn.addEventListener("click",startGame);

//Quiz starts here
function startGame(questions){
	
	startbtn.classList.add("hide");
	name.classList.add("hide");

	document.getElementById("navbar").classList.remove("hide");
	document.getElementById("quiz").classList.remove("hide");
	document.getElementById("timer").classList.remove("hide");
	next.classList.remove("hide");

	newQuestion();

}

//Display of new question
function newQuestion(){

	quesCount++;
	currentQues=shuffledQues[index];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	
	clickAns();

	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
		}
		else{
			ansMessage.innerHTML="WRONG";
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";

		}
	}
	else{
  		quiz.style.background="white";
  		body.style.backgroundImage='url("covid.jpg")';
  		ansMessage.innerHTML="";
  	}
  	if(shuffledQues.number==10){
  		submit.classList.remove("hide");
  	}

}

//Display of previous question
function prevQuestion(){
	
	console.log("previndex"+prevIndex);
	currentQues=shuffledQues[prevIndex];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	
	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
		}
		else{
			ansMessage.innerHTML="WRONG";
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";

		}
	}
	
	
  	else{
  		quiz.style.background="white";
  		body.style.backgroundImage='url("covid.jpg")';
  		ansMessage.innerHTML="";
	  	next.disabled=false;
	  	op1.disabled=false;
		op2.disabled=false;
		op3.disabled=false;
		op4.disabled=false;

		prevClickAns();
	}

}

//Function for clicking answers
function clickAns(){
	currentQues=shuffledQues[index];
	
	document.getElementById("ans").classList.remove("hide");

	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){

  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
	  		currentQues.answered=true;
	  		currentQues.check="CORRECT";
			currentQues.scores=1;
			next.classList.remove("hide");
			prev.classList.remove("hide");
			quiz.style.background="#76ff03";
			body.style.background="green";
			ansMessage.style.color="#76ff03";
  			count++;
  			answers.push("CORRECT");
  			ansMessage.innerHTML="CORRECT";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;

  			if(index==9){
		 		submit.classList.remove("hide");
		 		next.disabled=true;
		 		prev.disabled=true;
 			}
  			
  		});
  			
  	}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
				currentQues.answered=true;
				currentQues.check="WRONG";
				currentQues.scores=0;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#ef5350";
				body.style.background="#d50000";
				ansMessage.style.color="black";
	  			count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
	  			
	  			if(index==9){
					submit.classList.remove("hide");
					next.disabled=true;
					prev.disabled=true;
	 			}

  			});
  		
  		}
  		
	}
	if(index==9){
		submit.classList.remove("hide");
	}
  	
  	clickNext();
  		
}

function prevClickAns(){
	currentQues=shuffledQues[prevIndex];
	
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			
	  			currentQues.answered=true;
				currentQues.check="CORRECT";
				currentQues.scores=1;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#76ff03";
				body.style.background="green";
				ansMessage.style.color="#76ff03";
	  			count++;
	  			answers.push("CORRECT");
	  			ansMessage.innerHTML="CORRECT";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			

  				currentQues.answered=true;
  				currentQues.check="WRONG";
  				currentQues.scores=0;
  				next.classList.remove("hide");
  				prev.classList.remove("hide");
  				quiz.style.background="#ef5350";
  				body.style.background="#d50000";
  				ansMessage.style.color="black";
  				count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		
	}
	next.classList.remove("hide");
  		clickNext();
  		
}

//Function for next button
function clickNext(){

	
	next.addEventListener("click",reset);
	next.addEventListener("click",newQuestion);
}


function reset(){
	if(currentQues.check=="CORRECT"){
		document.getElementById("quesnav"+currentQues.number).classList.add("correct");
	}
	else if(currentQues.check=="WRONG"){
		document.getElementById("quesnav"+currentQues.number).classList.add("wrong");
	}
	
	quiz.style.background="white";
	body.style.backgroundImage='url("covid.jpg")';
	prevCount=0;
	index++;
	ansMessage.innerHTML="";
	prev.classList.remove("hide");
	result.classList.remove("hide");
	op1.disabled=false;
	op2.disabled=false;
	op3.disabled=false;
	op4.disabled=false;


}


function prevReset(){
	
	prevCount--;
	
}

//Function for previous button
function clickPrev(){
	
	prevCount++;
	console.log("prevCount"+prevCount);
	console.log("index"+index);
	index1=index;
	for(var i=1;i<=prevCount;i++){
		prevIndex=index1-i;
	}
	index=prevIndex;
	prevReset();

}
var todaydate;
var todaytime;
var dispName=document.getElementById("dispName");
var dispScore=document.getElementById("dispScore");
var dispDate=document.getElementById("dispDate");
var dispTime=document.getElementById("dispTime");

//Function for submit button
function clickSubmit(){
	result.classList.remove("hide");

	scoreContainer.classList.remove("hide");
	for(var i=0;i<10;i++){
		abc=shuffledQues[i];
		finalScore+=abc.scores;
	}

	result.innerHTML="Name: "+username.value+"<br> Your score is "+finalScore+"/10 <br> Correct Percentage:"+finalScore*10+"% <br> Number of correct questions= "+finalScore;
	submit.disabled=true;
	next.disabled=true;
	prev.disabled=true;
	var today= new Date();
	todaydate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	todaytime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
	var scores = JSON.parse(localStorage.getItem("detailstored"));
	console.log(JSON.parse(localStorage.getItem("detailstored")));
	update();
	function update(){

		if(scores==null){
			var details={
				name:username.value,
				score:finalScore,
				date:todaydate,
				time:todaytime
			};

			localStorage.setItem("detailstored", JSON.stringify(details));
			scores = JSON.parse(localStorage.getItem("detailstored"));

			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}
		if((finalScore>=scores.score)){
			var details={
				name:username.value,
				score:finalScore,
				date:todaydate,
				time:todaytime
			};

			localStorage.setItem("detailstored", JSON.stringify(details));
			scores = JSON.parse(localStorage.getItem("detailstored"));

			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}

		if((finalScore<scores.score)){
			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}

	}

}
//window.localStorage.clear();

var navId;
 function navigation(navQuesIndex,navigationId){
 	
 	navId=navigationId;
 	navQuestion(navQuesIndex-1,navId);
 	
 }

 function navQuestion(index,navId){

	console.log(index);
	quesCount++;
	currentQues=shuffledQues[index];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	

	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
  			document.getElementById(navId).style.background="#76ff03";
  			
		}
		else{
			ansMessage.innerHTML="WRONG";
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";
  			document.getElementById(navId).style.background="#ef5350";

		}
	}
	else{
  		quiz.style.background="white";
		body.style.backgroundImage='url("covid.jpg")';
		ansMessage.innerHTML="";
		op1.disabled=false;
		op2.disabled=false;
		op3.disabled=false;
		op4.disabled=false;
  	}
  	
  	currentQues=shuffledQues[index];
  	if(currentQues.number==10){
  		submit.classList.remove("hide");
  	}
	
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			
	  			currentQues.answered=true;
				currentQues.check="CORRECT";
				currentQues.scores=1;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#76ff03";
				body.style.background="green";
				ansMessage.style.color="#76ff03";
	  			count++;
	  			answers.push("CORRECT");
	  			ansMessage.innerHTML="CORRECT";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			

  				currentQues.answered=true;
  				currentQues.check="WRONG";
  				currentQues.scores=0;
  				next.classList.remove("hide");
  				prev.classList.remove("hide");
  				quiz.style.background="#ef5350";
  				body.style.background="#d50000";
  				ansMessage.style.color="black";
  				count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		
	}
	

	next.classList.remove("hide");
  		clickNext();

}

function navReset(){
	if(currentQues.check=="CORRECT"){
		document.getElementById("quesnav"+currentQues.number).classList.add("correct");
	}
	else if(currentQues.check=="WRONG"){
		document.getElementById("quesnav"+currentQues.number).classList.add("wrong");
	}

}
var interval;
function countDown(){

	var count = 300;
	interval = setInterval(function(){
	  document.getElementById('count').innerHTML=count;
	  count--;
	  if (count < -1){
	    clearInterval(interval);
	    document.getElementById('count').innerHTML='Done';
	    clickSubmit();
	    alert("You're out of time!");
	  }
	}, 1000);
}
function myStop() {
  clearInterval(interval);
}









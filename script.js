var questions=[{
question:"1) How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
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
question:"2) Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
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
question:"3) Which of the following diseases are related to coronavirus?",
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
question:"4) The first case of novel coronavirus was identified in-",
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
question:"5) For how long should you wash your hands to kill the coronavirus disease (COVID-19)?",
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
question:"6) From where coronavirus got its name?",
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
question:"7) How long does the novel coronavirus survive outside the body?",
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
question:"8) What is the safe distance to stay apart from someone who is sick?",
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
question:"9) Can you catch the coronavirus disease (COVID-19) from your pet?",
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
question:"10) What percentage alcohol in hand rubs and disinfectants is needed to kill the coronavirus disease (COVID-19)?",
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

var score=0;
var apple=[];
var count=0;
var prevCount=0;
var quesCount=0;
var currentQues={};
var prevIndex;
var answers=[];
var finalScore=0;
var index1;

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
startbtn.addEventListener("click",startGame);
var index=0;
function startGame(questions){
	console.log("started");
	startbtn.classList.add("hide");
	document.getElementById("quiz").classList.remove("hide");
	next.classList.remove("hide");

	newQuestion();

}

function newQuestion(){
	quesCount++;
	currentQues=questions[index];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	
	clickAns();

	if(currentQues.answered){
		console.log(currentQues.answered);
		//ansMessage.innerHTML=answers[answers.length-1];
		//console.log(answers.length-1);
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
  				body.style.background="#ef6c00";
  				ansMessage.innerHTML="";
  		}
	



}
console.log(answers);
function prevQuestion(){
	//document.getElementById("ans").classList.add("hide");
	//document.getElementById("ans").classList.remove("hide");
	//quesCount++;
	console.log("previndex"+prevIndex);
	currentQues=questions[prevIndex];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	//document.getElementById("ans").classList.add("hide");
	//options.addEventListener("click",clickAns);
	//console.log(options)
	//console.log(answers);
	if(currentQues.answered){
		console.log(currentQues.answered);
		//ansMessage.innerHTML=answers[answers.length-1];
		console.log(answers.length-1);
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
	
	/*op1.disabled=true;
	op2.disabled=true;
  	op3.disabled=true;
  	op4.disabled=true;*/
  	//prevReset();
  	else{
  		quiz.style.background="white";
  				body.style.background="#ef6c00";
  				ansMessage.innerHTML="";
  	next.disabled=false;
  	op1.disabled=false;
	op2.disabled=false;
	op3.disabled=false;
	op4.disabled=false;

	prevClickAns();
}




}
function clickAns(){
	currentQues=questions[index];
	console.log(score);
	//console.log(apple);
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		//var list = document.getElementsByClassName("options")[0];

  		//console.log(list.getElementsByClassName(i+1)[0].className);
  		//document.getElementById(1).addEventListener("click",function(){
  			//console.log("hi")
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
  			//prevCount=count;
  			apple.push("bye");
  			console.log(apple);
  			answers.push("CORRECT");
  			//console.log(answers);
  			ansMessage.innerHTML="CORRECT";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;

  			if(currentQues.option4=="1%"){
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
  			//prevCount=count;
  			if(apple.length==0){
  			apple.push("hi")
  		}else{
  			apple.pop();
  		}
  			console.log(apple);
  			answers.push("WRONG");
  			//console.log(answers);
  			ansMessage.innerHTML="WRONG";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;
  			
  			if(currentQues.option4=="1%"){
 		submit.classList.remove("hide");
 		next.disabled=true;
 		prev.disabled=true;
 	}

  		});
  		
  		}
  		

  		


  	//});
	}
	/*if(apple.length==0){
  		console.log("hi")
  		}
  	else{
  		console.log("bye");
  	}*/
  	for(var i=0;i<=apple.length;i++){
  		if(apple[i]=="bye"){
  			score++;
  			break;
  		}
  	}
  	//console.log(apple);
  	//console.log(quesCount);
 	/*if(currentQues.option4=="1%"){
 		submit.classList.remove("hide");
 		next.disabled=true;
 		prev.disabled=true;
 	}*/
	//next.classList.remove("hide");
  		clickNext();
  		//clickPrev();
  		//clickSubmit();

}
function prevClickAns(){
	currentQues=questions[prevIndex];
	console.log(score);
	
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		//var list = document.getElementsByClassName("options")[0];

  		//console.log(list.getElementsByClassName(i+1)[0].className);
  		//document.getElementById(1).addEventListener("click",function(){
  			//console.log("hi")
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
  			//prevCount=count;
  			apple.push("bye");

  			answers.push("CORRECT");
  			console.log(answers);
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
  			//prevCount=count;
  			if(apple.length==0){
  			apple.push("hi")
  		}else{
  			apple.pop();
  		}
  			//console.log(apple);
  			answers.push("WRONG");
  			console.log(answers);
  			ansMessage.innerHTML="WRONG";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;
  		});
  		}
  		


  	//});
	}
	for(var i=0;i<=apple.length;i++){
  		if(apple[i]=="bye"){
  			score++;
  			break;
  		}
  	}

	next.classList.remove("hide");
  		clickNext();
  		//prevReset();
  		//clickPrev();
  		//clickSubmit();

}

function clickNext(){
	//index++;
	//document.getElementById("ans").classList.add("hide");
	/*if(count==prevCount){
		alert("Select the answer");
	}*/
	/*if(op1.disabled=false){
		alert("Select answer");
	}*/
	next.addEventListener("click",reset);
	next.addEventListener("click",newQuestion);

	//document.getElementById("ans").classList.add("hide");

}
function reset(){
	//prev.classList.add("hide");
	//next.classList.add("hide");
	quiz.style.background="white";
	body.style.background="#ef6c00";
	prevCount=0;
	index++;
	ansMessage.innerHTML="";
	prev.classList.remove("hide");
	//submit.classList.remove("hide");
	result.classList.remove("hide");
	op1.disabled=false;
	op2.disabled=false;
	op3.disabled=false;
	op4.disabled=false;
	//apple.length=0;

}
function prevReset(){
	//index++;
	prevCount--;
	//prevCount=0;
}

function clickPrev(){
	//prev.addEventListener("click",function(){
	prevCount++;
	console.log("prevCount"+prevCount);
	console.log("index"+index);
	index1=index;
	for(var i=1;i<=prevCount;i++){
		prevIndex=index1-i;
	}
	index=prevIndex;
	prevReset();
//});
	/*prev.addEventListener("click",function(){
		prevQuestion();
	});*/
	
	//prevQues=questions[prevIndex];

}
function choose(){

}

function clickSubmit(){
	//submit.addEventListener("click",function(){
		for(var i=0;i<10;i++){
			abc=questions[i];
			finalScore+=abc.scores;

		}

		result.innerHTML="Your score is "+finalScore+"/10";
		submit.disabled=true;
	//});

}





var questions=[{
question:"1) When did we go to the movie we came out halfway?",
option1:"December 1, 2019",
option2:"November 25, 2019",
option3:"February 18, 2020",
option4:"January 31, 2020",
answer:4,
answered:false,
check:null,
scores:0
},
{
question:"2) Till yesterday raksha was in one of your EEE whatsapp grp. In that grp what is the last 3 digits of phone no. of the person who left on September 7?",
option1:"963",
option2:"323",
option3:"540",
option4:"797",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"3) Our(nith and rak) fav hindi serial hero did an album song recently. What is the ending letter of the heroine of that album?",
option1:"A",
option2:"I",
option3:"N",
option4:"M",
answer:3,
answered:false,
check:null,
scores:0
},
{
question:"4) At what time we started our triwizard treasure hunt?",
option1:"12.00 PM",
option2:"11.40 AM",
option3:"10.25 AM", 
option4:"12.35 PM",
answer:3,
answered:false,
check:null,
scores:0
},
{
question:"5) You sent one of your fav song on our grp. In that song's comment section in youtube, oru famous actor comment panirpanga, avangaloda daughter or son ku endha month bday?",
option1:"January",
option2:"May",
option3:"July",
option4:"October",
answer:2,
answered:false,
check:null,
scores:0
},
{
question:"6) Sivaangi bday aniki SK enga irundhu cake vangnanga. First letter?",
option1:"C",
option2:"H",
option3:"K",
option4:"M",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"7) When was your PPRL 1st PI?",
option1:"August 30",
option2:"September 15",
option3:"September 31",
option4:"October 3",
answer:2,
answered:false,
check:null,
scores:0
},
{
question:"8) Namma first trichy to chennai vandha ticket PNR no. enna?",
option1:"4609396633",
option2:"4610977861",
option3:"4464250145",
option4:"4717302774",
answer:1,
answered:false,
check:null,
scores:0
},
{
question:"9) Sivaangi ku epo Silver Play Button kedachidhu?",
option1:"December 22, 2020",
option2:"February 15, 2020",
option3:"January 19, 2021",
option4:"August 24, 2020",
answer:4,
answered:false,
check:null,
scores:0
},
{
question:"10) First question oru padam pathi irundhuchu la, andha padam and namma sendhu paatha oru series(inum mudikave ila), idhu rendu la common ah oru actor nadichirpanga, avanga per enna?",
option1:"Oliver jackson-cohen",
option2:"Victoria pedretti",
option3:"Brad Pitt",
option4:"T'nia miller",
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
var index=0;

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
const desc=document.getElementById("desc");

startbtn.addEventListener("click",startGame);



//Quiz starts here
function startGame(questions){
	console.log("started");
	startbtn.classList.add("hide");
	//desc.classList.add("hide");
	document.getElementById("quiz").classList.remove("hide");
	next.classList.remove("hide");

	newQuestion();

}

//Display of new question
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
  				body.style.backgroundImage='url("covid.JPG")';
  				body.style.backgroundSize='1300px 1000px';
  				ansMessage.innerHTML="";
  		}
  	if(currentQues.option4=="T'nia miller"){
		 		submit.classList.remove("hide");
		 		next.disabled=true;
		 		prev.disabled=true;
		 	}

}

//Display of previous question
function prevQuestion(){
	
	console.log("previndex"+prevIndex);
	currentQues=questions[prevIndex];
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
  		body.style.backgroundImage='url("covid.JPG")';
  		body.style.backgroundSize='1300px 1000px';
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
	currentQues=questions[index];
	
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
  			apple.push("bye");
  			answers.push("CORRECT");
  			ansMessage.innerHTML="CORRECT";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;

  			if(currentQues.option4=="T'nia miller"){
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
	  		
	  			if(apple.length==0){
	  				apple.push("hi")
	  			}
	  			else{
	  				apple.pop();
	  			}
	  			
	  			answers.push("WRONG");
	  			
	  			ansMessage.innerHTML="WRONG";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
	  			
	  			if(currentQues.option4=="T'nia miller"){
					submit.classList.remove("hide");
					next.disabled=true;
					prev.disabled=true;
	 			}

  			});
  		
  		}
  		
	}
	
  	for(var i=0;i<=apple.length;i++){
  		if(apple[i]=="bye"){
  			score++;
  			break;
  		}
  	}
  	
  	clickNext();
  		
}

function prevClickAns(){
	currentQues=questions[prevIndex];
	
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
	  			apple.push("bye");
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
  			
  				if(apple.length==0){
  					apple.push("hi")
  				}
  				else{
  					apple.pop();
  				}
  			
	  			answers.push("WRONG");
	  			console.log(answers);
	  			ansMessage.innerHTML="WRONG";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		
	}
	for(var i=0;i<=apple.length;i++){
  		if(apple[i]=="bye"){
  			score++;
  			break;
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
	
	quiz.style.background="white";
	body.style.backgroundImage='url("covid.JPG")';
	body.style.backgroundSize='1300px 1000px';
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

//Function for submit button
function clickSubmit(){
	
		for(var i=0;i<10;i++){
			abc=questions[i];
			finalScore+=abc.scores;
		}
		
		if(finalScore>7)
		{
			result.innerHTML="Your score is "+finalScore+"/10 <br> Congratulations!!! <br> Now here you go <br> Instagram Username: megs_bd <br> Password: Megsbd <br> Enjoy!!!"
		}
		else{
			result.innerHTML="Sorry! <br> Your score is "+finalScore+"/10 <br> Refresh and play again!";
		}
		submit.disabled=true;

}





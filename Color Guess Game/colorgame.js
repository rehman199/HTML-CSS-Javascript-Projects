var input=document.getElementsByTagName("input")[0] ;
var changeColorButton=document.getElementById("btn-1");
changeColorButton.addEventListener("click",newGameStart) ;
var colors_array=[] ;
var colors=document.getElementsByClassName("colors") ;
var h1Span=document.getElementById("h1-span") ;
var h1Tag=document.getElementsByTagName("h1")[0];
var randomColorIndex;
var isGameOver;
var gameStatus;
newGameStart();

function newGameStart(){
	h1Tag.style.color="yellow";
	h1Tag.style.backgroundColor="lightseagreen";
	input.value="Game Started";
	gameStatus=setTimeout(function(){input.value="Game in Progress";},2000) ;
	isGameOver=false;
	changeColors();
	randomColorPicker();
	addButtonEventListeners();
}

function generateRandom(){
	return Math.floor(Math.random()*254) ;
}

function changeColors(){
	if(isGameOver===false){
	for(var i=0;i<6;i++){
	colors_array[i]="RGB("+generateRandom()+", "+generateRandom()+", "+generateRandom()+")" ;
	colors[i].style.backgroundColor=colors_array[i] ;
	}
	randomColorPicker();
	}
	else{
	for(var i=0;i<6;i++){
	colors[i].style.backgroundColor=colors_array[randomColorIndex] ;
	}	
	}

}

function randomColorPicker(){
	randomColorIndex=Math.floor(Math.random()*5) ;
	h1Span.textContent=colors_array[randomColorIndex];
}

function onColorClick(){
	if(this.style.backgroundColor===(colors_array[randomColorIndex].toLowerCase())){
	colorMatched();
	}
	else{
		gameStatus=setTimeout(function(){input.value="Incorrect ! Try Again.";});
		gameStatus=setTimeout(function(){input.value="Game in Progress";},700) ;
	}
	
}

function addButtonEventListeners(){
	for(var i=0;i<6;i++){
	colors[i].addEventListener("click",onColorClick) ;
	}	
}

function removeButtonEventListeners(){
	for(var i=0;i<6;i++){
	colors[i].removeEventListener("click",onColorClick) ;
	}	
}

function colorMatched(){
	clearTimeout(gameStatus);
	h1Tag.style.backgroundColor=colors_array[randomColorIndex];
	h1Tag.style.color="white";
	input.value="Correct !";
	changeColorButton.textContent="Play Again ?";
	isGameOver=true;
	removeButtonEventListeners();
	changeColors();
}
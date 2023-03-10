screen=document.getElementById("screen");

function display(no){
    //SCREEN STORE. THE ELEMENT WHICH INSIDE THE INPUT BUT 
    //INPUT IS A SINGLE LIER TAG THEN USE "VALUE" 
    //INSTED OF ".innerHTML"
    screen.value += no;
}
function result(){
    number=screen.value;
    final=eval(number);//EVAL METHOD = use for Evalute the collection of data.
    screen.value = final;    
}
function clr(){
    screen.value="";
}

   
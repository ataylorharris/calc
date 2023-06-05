

var a = document.querySelectorAll("button");
//The current calculator display screen
var current = document.getElementById("display").value;
//initializing the arrays for the operand values and operators 
const nums = [];
const ops = [];

function getValue(v) {

  //Display screen
  
  var current = document.getElementById("display").value;




  

  


//I mkae the current display a float/number and add the values to create as many as possible

 var firstnum = document.getElementById("display").value = parseFloat(current) +  v; 
 document.getElementById("display").value = parseFloat(firstnum);

if(current.includes(".")){

var dec = document.getElementById("display").value =current + v;





}
 

 
return firstnum;














  


  

  

 



  



 
  
  
  
  

 
 
    
    

}



//creating a decimal function to add a decimal to current number if adding
function sec() {
  if(!document.getElementById("display").value.includes(".")){
 var dec =  document.getElementById("display").value.toString();
 document.getElementById("display").value = dec + "." ;
  }
 
}

//clear screen
function clscrn() {

document.getElementById("display").value = parseFloat(0);
document.getElementById("display2").value = " ";

nums.length = 0;
ops.length = 0
 
 }



//getting the operator and adding multiple numbers at once if needed
function probl(o) {


  let current = document.getElementById("display").value;


nums.push(current);
document.getElementById("display").value = parseFloat(0);

if (o === '+') {
  ops.push(o);
  document.getElementById("display2").value = nums[0]  + "+" 

  
 }


else if (o === '-') {
  ops.push(o);
  document.getElementById("display2").value = nums[0]  + "-" 

  
}
else if (o === '*') {
  ops.push(o);
  document.getElementById("display2").value = nums[0] + "*" 
 
}
else if (o === '/') {
  ops.push(o);
  document.getElementById("display2").value = nums[0] + "/" 

   }
   if (ops.length > 1) {
     if(ops[0]=== '+'){
     var sq = (parseFloat(nums[0]) + parseFloat(nums[1]));
     document.getElementById("display2").value = sq;
     nums.pop();
     nums.shift();
     nums.push(sq);
      }
   }
   if (ops.length > 1) {
    if(ops[0]=== '-'){
    var sq = (parseFloat(nums[0]) - parseFloat(nums[1]));
    document.getElementById("display2").value = sq;
    nums.pop();
    nums.shift();
    nums.push(sq);
     }
  }
  if (ops.length > 1) {
    if(ops[0]=== '*'){
    var sq = (parseFloat(nums[0]) * parseFloat(nums[1]));
    document.getElementById("display2").value = sq;
    nums.pop();
    nums.shift();
    nums.push(sq);
     }
  }
  if (ops.length > 1) {
    if(ops[0]=== '/'){
    var sq = (parseFloat(nums[0]) / parseFloat(nums[1]));
    document.getElementById("display2").value = sq;
    nums.pop();
    nums.shift();
    nums.push(sq);
     }
  }
   
}


  




  
  
  

function negativenum(){

var n = document.getElementById("display").value * -1;

document.getElementById("display").value = n;
}
  

 

  

function backspace() {

  document.getElementById("display").value = document.getElementById("display").value .slice(0, -1);
  if(document.getElementById("display").value === ""){
    document.getElementById("display").value = parseFloat(0);
  }
}










 
 
 
 
 


function equation () {

for (var i = 0; i < ops.length; i++){
 if (ops[i] === '+') {
 
 var result = parseFloat(nums[0]) + parseFloat(document.getElementById("display").value);
 document.getElementById("display2").value = nums[0] + "+" + document.getElementById("display").value;
 

 }
 else if (ops[i] === '-'){
  var result = parseFloat(nums[0]) - parseFloat(document.getElementById("display").value);
 
  document.getElementById("display2").value = nums[0] + "-" + document.getElementById("display").value;
 


  
  



 }
 else if (ops[i] === '*'){
  var result = parseFloat(nums[0]) * parseFloat(document.getElementById("display").value);
  document.getElementById("display2").value = nums[0] + "*" + document.getElementById("display").value


 }
 else if (ops[i] === '/'){
  var result = parseFloat(nums[0]) / parseFloat(document.getElementById("display").value);
  document.getElementById("display2").value = nums[0] + "/" + document.getElementById("display").value

  

 }
}

 document.getElementById("display").value = result; 
 

nums[0] = 0;
nums[1] = result;
 
}


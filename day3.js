/*lobal scope :

variable declared outside any function or block are  in the global scope .
they are accessible anywhere in the script

function say(){
    let name = "javascript";
    console.log("hello global scope");
    console.log("within "+name);

}
say() 
*/





/*block scope :

function Voting(age) {
    if (age >= 18) {
        var iscloudy = true;
        console.log("You are eligible to vote.");
        
    } else {
        var iscloudy = false;
        console.log("You are not eligible to vote.");
        
    }
    console.log(iscloudy);
    
}
Voting(10); 
*/



/*callback function

function text() {
    console.log("message");

}

function send(callback){
    console.log("send message");
    setInterval(callback,1000);
} 
send(text); 

*/

/* arrow function

let count = 0;
let Interval=()=>{
    count++;
    console.log("count is "+count);
    if(count < 5){
        Interval();
    }
}
Interval();
*/

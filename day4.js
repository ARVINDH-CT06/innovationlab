// array 
/* an array is special variable  in js that can hold multiple values in a single variable \
in js array is also known as hetrogenenous

let number=[1,2,"three",true];

let names=new Array("arvindh","samantha");

console.log(number[2]);
console.log(names.length);

// filter()-it will filter the result argument
let number=[1,2,3,4,5];
let result=number.filter(number => number[0]);
console.log(result); 

//slice- delete the element based on the index value

//splice - change the oriinal arrayv by adding removing item by its index


let number=[1,2,3,4,5];
let r=number.splice(1,3,"hai");
console.log(number)

//obj
let marks={
    name:"arvindh",
    totalmark:"total mark is :301",
    subject:{
        dsa:100,
        java:99,
        python:90
    },
    avg:function(){
        let sum=this.subject.dsa+this.subject.java+this.subject.python;
        return sum;
    }
}
console.log(marks["name"]);// method one
console.log(marks.totalmark)//method two

console.log(marks.subject.dsa);
console.log(marks.subject.java);
console.log(marks.subject.python);
console.log(marks.avg());



const person = {
    names:"arvindh",
    age:18,
    city:"coimbatore"
};

const {names,age,city}=person;

console.log(names);
console.log(age);
console.log(city);

5.Array destructuring
const person=["john",22,"softwaredeveloper"];
const[name,age,desiginiation]=person;
console.log(name+" "+age+" "+desiginiation);


*/

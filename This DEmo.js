let person={
    name:"Satyam",
    age:20,
    greet:function(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        console.log(this);
       let innerGREET=()=>{
        console.log("Inner Greet: Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        console.log(this);
       }
         innerGREET();
    }
};
person.greet();

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }      
};

const p1=new Person("Satyam",20);
console.log(p1);
p1.greet();
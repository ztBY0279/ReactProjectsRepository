import { createContext } from "react";

 const MyContext = createContext("")
console.log('the mycontext is ',MyContext);
const customfun = ()=>{
    console.log("hello")
}

const Name = "Bharat yadav"

const obj1 = {
    name:"Bharat",
    customfun,
    Name

}
console.log('the value obj1 is ',obj1);
console.log('the value obj1 is ',obj1.name);
console.log('the value obj1 is ',obj1.Name);
console.log('the value obj1 is ',obj1.customfun);

const arr = [1,2,3,4,5,6,7,8,9,10];

const [first, second] = arr;
console.log(first);
console.log(second);

export default customfun;
export {MyContext}





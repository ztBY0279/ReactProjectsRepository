
import { useState, useRef ,useEffect,useCallback} from "react"
export default function App()  {
const[password,setPassword] = useState("");
const[includeNumber,setincludeNumber] = useState(false);
const[includeSpecialChar,setincludeSpecialChar] = useState(false);
const[sliderRange,setSliderRange] = useState(8);

const inputpasswordCopy = useRef(null);
const buttonRef = useRef(null);
console.log('the value of buttonref is ',buttonRef);
console.log('the value of useRef is ',useRef(null));

const randomPasswordGenerator = useCallback(()=>{
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let specialCharacters = "!@#$%^&*()";
  if(includeNumber){
      characters += numbers;
      console.log('the characters is (in case of number) ',characters);
  }
 
  if(includeSpecialChar){
      characters += specialCharacters;
      console.log('the characters is (in case of Special Char) ',characters);
  }
 
 
  let password = "";
  for (let i = 0; i < sliderRange; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
},[includeNumber, includeSpecialChar, sliderRange])



function handleChange(event){
   console.log('the event is ',event);
   let rangeNumber = event.target.value;
   console.log('the range number is ',Number(rangeNumber));
   setSliderRange(Number(rangeNumber));
  
   setPassword(randomPasswordGenerator(includeNumber,includeSpecialChar));

 
}


function handleChangeCheckboxNumber(event){
    console.log('the value of event is ',event.target.checked);
    setPassword(randomPasswordGenerator(event.target.checked,includeSpecialChar));
    setincludeNumber(event.target.checked);
}

function handleChangeCheckboxSpecialChar(event){
 console.log('the value of event is ',event.target.checked);
 setincludeSpecialChar(event.target.checked);
}

function handleClick(){

   inputpasswordCopy?.current.select();
   let customPassword = inputpasswordCopy?.current.select();
   console.log('the value of customPassword is ' + customPassword);
   navigator.clipboard.writeText(password)
   .then((data)=>{
      console.log('password are copied to clipboard and data is ',data);
   })
   .catch((error)=>{
      console.log('error is ',error);
    })
   
}

useEffect(()=>{
 console.log('the useEffect is called');
 let password1 = randomPasswordGenerator();
 setPassword(password1);
},
[setPassword,randomPasswordGenerator]
)

return (

  <div className="container mx-auto mt-8 max-w-xl p-5 bg-gray-100 rounded-lg shadow-md">
  <div className="text-center">
    <h1 className="text-2xl font-bold text-blue-500">Random Password Generator</h1>
    <p className="text-gray-600">Create strong and secure passwords to keep your account safe online.</p> 
  </div>
  <div className="flex items-center mt-4">
    <input 
      type="text" className="flex-1 border-2 border-solid border-black rounded-l-md py-3 px-4 focus:outline-none" 
      value={password}
      readOnly
      ref={inputpasswordCopy}
    />
    <button className="btn bg-purple-500 text-white font-bold rounded-r-md px-4 py-3 " onClick={handleClick} ref={buttonRef}>Copy</button>
  </div>
  <div className="flex items-center mt-4">
    <input className="mr-3" type="range" step={1} min={8} max={25} defaultValue={8} onChange={handleChange} />
    <span className="mr-2">length ({sliderRange})</span>
    <label className="mr-2"> Number</label>
    <input className="mr-2" type="checkbox" onChange={handleChangeCheckboxNumber}/>
    <label className="mr-2"> Special Character</label>
    <input type="checkbox" onChange={handleChangeCheckboxSpecialChar}/>
  </div>
</div>


)
}


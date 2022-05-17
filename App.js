import React,{useState} from "react";
const App =()=>
{
  let Time=new Date().toLocaleTimeString();
const[ctime,setCtime]=useState(Time);
const UpdateTime= () =>{
  Time =new Date().toLocaleTimeString();
  setCtime(Time);

};
setInterval(UpdateTime,1000)
return(
  <>
  <div><h1>Digital Clock by Bhavesh Parmar </h1></div>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lavender"
       
       }}>
         
        
        <h1> {ctime}</h1>
        {/* <button onClick={UpdateTime}>Get Time</button> */}
      </div>
 
  </>
)
}

export default App;

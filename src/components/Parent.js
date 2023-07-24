
import react, { useState } from "react";
import Child from "./Child";


const Parent=()=>{

let[showModal,setShowModal]=useState(false);
console.log(showModal);
    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child showModal={showModal} setShowModal={setShowModal}/>
           
        </div>
    )
}
export default Parent;
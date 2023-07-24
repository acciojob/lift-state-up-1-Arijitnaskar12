import React from "react";


const Child=(props)=>{


    return(
        <div className="child">
            <h1>Child Component</h1>
                <button onClick={()=>props.setShowModal(true)}>Show Modal</button>
                {
                props.showModal &&(
                    <div>
                        <h3>Modal Content</h3>
                        <p>This is modal content</p>
                    </div>
                )
            }
        </div>
    )
}
export default Child;
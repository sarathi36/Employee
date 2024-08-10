import React from "react";
import bruce from './images/robert paddinson.jpg'

function Bruce(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={bruce} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Bruce Wayne</h2>
                <h2 >UI/UX Developer</h2>
                </div>
               <h3>A UI/UX Designer's responsibilities include gathering user requirements, designing graphic elements, and developing navigation components. Therefore, you should have prior experience with design software and wireframe tools to be successful in this role.</h3>
            </div>

        </div>
        </>
    )
}

export default Bruce;
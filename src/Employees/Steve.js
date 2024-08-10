import React from "react";
import './box.css';
import steve from './images/steve.jpg'
function Steve(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={steve} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Steve Rogers</h2>
                <h2 >Web Developer</h2>
                </div>
               <h3>The web developer is responsible for planning and developing software solutions and web applications, supporting and maintaining a company’s websites and digital products. The day-to-day work of the web developer highly depends on constantly evolving internet innovations. Providing a targeted web developer job description and salary range information can help you attract top talent.</h3>
            </div>

        </div>
        </>
    )
    
}

export default Steve;
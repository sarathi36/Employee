import React from "react";
import thor from './images/download.jpeg';
import sarathi from './images/sarathi picture.jpg';
import './box.css';

function Sarathi(){
    return(
        <>
        <div style={{margin:'auto', width:'50%'}}>
            
        </div>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={sarathi} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Sarathi S</h2>
                <h2 >Full Stack Developer</h2>
                </div>
               
                <h3>The main task of a full-stack developer is to create a product from scratch and supervise the general flow of the project. To implement such projects, they require perfect knowledge in the field of the latest frontend, backend and cloud technologies.</h3>
            </div>

        </div>
        </>
    )
}

export default Sarathi;
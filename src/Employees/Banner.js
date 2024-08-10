import React from "react";
import banner from './images/brucebanner.jpg'
function Banner(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={banner} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Bruce Banner</h2>
                <h2 >Data Analysts</h2>
                </div>
               <h3>Data analysis is a critical field that is pivotal in interpreting complex data to help businesses make informed decisions. With the advent of big data, the demand for skilled data analysts has surged across various industries. Here's a detailed exploration of the data analyst job, including what data analysis entails, the role of a data analyst, their importance in today's data-driven world, and what skills are required for data analysts.</h3>
            </div>

        </div>
        </>
    )
}

export default Banner;
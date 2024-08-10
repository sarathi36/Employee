import React from "react";
import logan from './images/hugh jackman.jpg'

function Logan(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={logan} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Logan Wolverine</h2>
                <h2 >Data Scientist</h2>
                </div>
               <h3> The data scientist is a relatively new key player in organizations — a new breed of analytical data experts. They are part mathematicians, part computer scientists, and they rule the world of big data. Businesses today are wrestling with volumes of unstructured information that’s a virtual gold mine, which can help boost revenue when unearthed. But they really need professionals who can dig in and find valuable business insights, sifting through the useless chaff and finding the precious nuggets of data. That is what the data scientist does; that is why they are highly sought after and well paid.   </h3>
            </div>

        </div>
        </>
    )
}

export default Logan;
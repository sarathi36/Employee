import React from "react";
import tony from './images/tony.jpg'
function Tony() {
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={tony} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Tony Stark</h2>
                <h2 >Software Developer</h2>
                </div>
               <h3>A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike. They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. They must have critical thinking skills, as well as strong problem-solving abilities.</h3>
            </div>

        </div>
        </>
    )
}

export default Tony;

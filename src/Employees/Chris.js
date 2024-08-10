import React from "react";
import chris from './images/chris.jpg'

function Chris(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={chris} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Thor Odinson</h2>
                <h2 >Frond End Developer</h2>
                </div>
               <h3>A front-end developer is basically a web developer who has a specialization in creating user interfaces for applications and websites. The developers work with designers to translate visual designs into functional code. They implement the layout, styling, and interactivity of a website. In addition, this includes structuring the content with HTML, applying styles with CSS, and adding interactivity with JavaScript.</h3>
            </div>

        </div>
        </>
    )
}

export default Chris;
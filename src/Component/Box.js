import React from "react";
import './box.css';
function Box(){
    return(
        <>
        <div style={{display:'flex', padding:'30px'}}>
        <div style={{width:'35px',height:'25px',backgroundColor:'#1e81b0', display:'flex',margin:'auto'}}>
               <li id="list1" style={{width:'35px',height:'25px',backgroundColor:'#1e81b0'}}>Frond End Developer</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#FFFF00' , display:'flex' ,margin:'auto'}}>
               <li id="list2" style={{width:'35px',height:'25px',backgroundColor:'#FFFF00'}}>Back End Developer</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#FF0000' , display:'flex' ,margin:'auto'}}>
               <li id="list3" style={{width:'35px',height:'25px',backgroundColor:'#FF0000'}}>Full Stack Developer</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#FF00FF' , display:'flex' ,margin:'auto'}}>
               <li id="list4" style={{width:'35px',height:'25px',backgroundColor:'#FF00FF'}}>UI/UX Developer</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#008000', display:'flex',margin:'auto'}}>
               <li id="list5" style={{width:'35px',height:'25px',backgroundColor:'#008000'}}>Data Analysts</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#00008B' , display:'flex' ,margin:'auto'}}>
               <li id="list6" style={{width:'35px',height:'25px',backgroundColor:'#00008B'}}> Software Developer</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#013220' , display:'flex' ,margin:'auto'}}>
               <li id="list7" style={{width:'35px',height:'25px',backgroundColor:'#013220'}}>Data Scientist</li>
            </div>
            <div style={{width:'35px',height:'25px',backgroundColor:'#FF474C' , display:'flex' ,margin:'auto'}}>
               <li id="list8" style={{width:'35px',height:'25px',backgroundColor:'#FF474C'}}>Web Developer</li>
            </div>
        </div>
        
        </>
    )
}


export default Box;
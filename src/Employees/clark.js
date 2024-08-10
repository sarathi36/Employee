import React  from "react";
import clark from './images/henry cavuil.jpg'

function Clark(){
    return(
        <>
        <div style={{display:'flex',margin:'auto', width:'80%'}}>
            <div style={{display:'flex',margin:'auto',width:'35%'}}>
                <img src={clark} width='100%' />
            </div>
            <div style={{display:'block',margin:'auto',width:'45%'}}>
                <div>
                <h2 style={{fontFamily:'sans-serif',fontSize:'40px'}}>Clark Kent</h2>
                <h2 >Back End Developer</h2>
                </div>
               <h3>Backend developers are specialists whose main responsibility is to develop web and desktop products on the server side. They not only create new products, they work on improving existing ones. Let's look at a classic example of a backend developer job description that a specialist of any level may encounter. This description can help a backend developer to create a professional resume and find a job, and can also help recruiters because the template identifying responsibilities, requirements, and skills can easily be used to create a position description to fill a vacancy.</h3>
            </div>

        </div>
        </>
    )
}

export default Clark;
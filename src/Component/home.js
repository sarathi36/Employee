import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import Box from "./Box";
function Home(){
    return(
        <>
        <div>
           
            <div style={{margin:'auto',width:'80%'}}>
                <h1>Employee Datails</h1>
            </div>
           
          <table>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                
                <th>Role</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>1</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Sarathi' >Sarathi </NavLink> </td>
                <td>Subramani</td>
                <td>20</td>
               
                <td>Full Stack Developer</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Chennai'>Chennai</NavLink>   </td>
            </tr>
            <tr>
                <td>2</td>
                <td > <NavLink style={{color:'black', textDecoration:'none'}} to='/Steve' >Steve </NavLink></td>
                <td>Rogers</td>
                <td>40</td>
               
                <td>Web Developer</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/Brooklyn'> Brooklyn</NavLink> </td>
            </tr>
            <tr>
                <td>3</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Tony' >Tony </NavLink></td>
                <td>Stark</td>
                <td>25</td>
               
                <td>Software Developer</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/NewYork'>NewYork</NavLink> </td>
            </tr>
            <tr>
                <td>4</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Banner' >Bruce </NavLink></td>
                <td>Banner</td>
                <td>28</td>
                
                <td>Data Analysts</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/Singapore'>Singapore</NavLink>  </td>
            </tr>
            <tr>
                <td>5</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Natasha' >Natasha </NavLink></td>
                <td>Romanaoff</td>
                <td>21</td>  
                <td>UI/UX Developer</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Mongolia'>Mongolia</NavLink></td>
            </tr>
            <tr>
                <td>6</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Chris' >Thor </NavLink></td>
                <td>Odinson</td>
                <td>35</td>  
                <td>Frond End Developer</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Dubai'>Dubai</NavLink></td>
            </tr>
            <tr>
                <td>6</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Peter' >Peter </NavLink></td>
                <td>Parker</td>
                <td>19</td>  
                <td>Software Developer</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/Mumbai'>Mumbai</NavLink></td>
            </tr>
            <tr>
                <td>7</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/Logan' >Logan </NavLink></td>
                <td>Wolverine</td>
                <td>45</td>  
                <td>Data Scientist</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Germany'>Germany</NavLink></td>
            </tr>
            <tr>
                <td>8</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Elisabeth' >Elisabeth </NavLink></td>
                <td>Olson</td>
                <td>21</td>  
                <td>Web Developer</td>
                <td>  <NavLink style={{color:'black', textDecoration:'none'}} to='/china'>China</NavLink>    </td>
            </tr>
            <tr>
                <td>9</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Mary' >Mary </NavLink></td>
                <td>Jane</td>
                <td>23</td>  
                <td>Data Analysts</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Korea'>South Korea</NavLink> </td>
            </tr>
            <tr>
                <td>10</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Clark' >Clark </NavLink></td>
                <td>Kent</td>
                <td>25</td>  
                <td>Back End Developer</td>
                <td ><NavLink style={{color:'black', textDecoration:'none'}} to='/Malaysia'>Malaysia</NavLink> </td>
            </tr>
            <tr>
                <td>11</td>
                <td> <NavLink style={{color:'black', textDecoration:'none'}} to='/Bruce' >Bruce </NavLink></td>
                <td>Wayne</td>
                <td>28</td>  
                <td>UI/UX Developer</td>
                <td><NavLink style={{color:'black', textDecoration:'none'}} to='/newzealand'>Newzealand</NavLink></td>
            </tr>
          </table>

        </div>
        
        </>
    )
}

export default Home;
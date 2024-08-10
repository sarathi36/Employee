import React,{useState} from "react";
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import Head from "./Head";
import Box from "./Box";

function Piec(){
    const [activeIndex, setActiveIndex] = useState(-1);

    const data = [
        { name: 'FrondEnd Developer ', cup: 5 },
        { name: 'BackEnd Developer', cup: 3 },
        { name: 'FullStack Developer', cup: 8 },
        { name: 'UI/UX Developer', cup: 2 },
        { name: 'Data Analysts', cup: 2 },
        { name: 'Software Developer', cup: 3 },
        { name: 'Data Scientist', cup: 4 },
        { name: 'Web Developer', cup: 3 }
    ];
  
    const COLORS = ['#1e81b0', '#FFFF00', '#FF0000', '#FF00FF','#008000','#00008B','#013220','#FF474C'];

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
  
    return(
        <>
        <Head />
        <div>
            <Box />
        </div>
       <PieChart width={1080} height={720}>
            <Pie
                activeIndex={activeIndex}
                data={data}
                fontFamily='sans-serif'
                fontSize={50}
              
                dataKey="cup"
                outerRadius={300}
                fill="red"
                onMouseMove={onPieEnter}
                style={{ cursor: 'pointer', outline: 'none', fontSize:"50px",fontFamily:'sans-serif' }} 
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
      
        </>
    )
}

export default Piec;
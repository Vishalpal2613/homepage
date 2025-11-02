import React from 'react'
import { Box } from '@mui/material';
import ContentItem from './ContentItem';


const contentArray = [{title: "Get Things Done", description: "Lightwight but powrful source code editor runs on your desktop",
  img: "/1.jpg",
},
{title: "Productivity Is Briliant", 
  description: "",
  img: "/2.jpg",
},
{title: "Fast Development", 
  description: "",
  img: "/3.jpg",
}
]
const Content = () => {
  return (
    <Box bgcolor="#fbf2f2" 
    display={'flex'} 
    justifyContent={'center'} 
    flexDirection={'column'} 
    width="100%" 
    height={"10%"}>
      {contentArray.map((cont, index)=>(<ContentItem title={cont.title} description={cont.description} img={cont.img} key={index}/>))}
    </Box>
  )
}

export default Content;
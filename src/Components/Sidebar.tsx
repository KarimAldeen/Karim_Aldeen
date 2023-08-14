"use client"
import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { FaMobileAlt,FaCommentDots ,FaBook,FaGoogle,FaLinkedin,FaWhatsapp} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
         <div className='H_Left'>
            <ReactTooltip anchorId="Google" className="Google" />
            <FaWhatsapp id='Google' data-tooltip-content="MhmadKarimAldeen@gmail.com"/> 
           <span>
           <ReactTooltip anchorId="Linkedin" className="Linkedin"/>
               <FaLinkedin id='Linkedin' data-tooltip-content="MhmadKarimAldeen"/>
            </span>
            <ReactTooltip anchorId="Whatsapp" className="Whatsapp"/>
               <FaGoogle id='Whatsapp' data-tooltip-content="0957551401"/>
        
            </div>
            <div className='H_Right'>
            <ReactTooltip anchorId="Mobile" className="Mobile" />
            <FaMobileAlt id='Mobile' data-tooltip-content="MhmadKarimAldeen@gmail.com"/> 
           <span>
           <ReactTooltip anchorId="Comment" className="Comment"/>
               <FaCommentDots id='Comment' data-tooltip-content="MhmadKarimAldeen"/>
            </span>
            <ReactTooltip anchorId="Book" className="Book"/>
               <FaBook id='Book' data-tooltip-content="0957551401"/>
        
            </div>
        
    </div>
  )
}

export default Sidebar
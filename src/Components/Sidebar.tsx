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
            <FaGoogle id='Google' data-tooltip-content="MuhammedKarimAldeen@gmail.com"/> 
           <span>
           <ReactTooltip anchorId="Linkedin" className="Linkedin"/>
               <FaLinkedin id='Linkedin' data-tooltip-content="MuhammedKarimAldeen"/>
            </span>
           
            </div>
            <div className='H_Right'>
            <ReactTooltip anchorId="Mobile" className="Mobile" />
            <FaMobileAlt id='Mobile' data-tooltip-content="963957551401"/> 
           <span>
           <ReactTooltip anchorId="Whatsapp" className="Whatsapp"/>
               <FaWhatsapp id='Whatsapp' data-tooltip-content="0951968995"/>
        
            </span>
           
            </div>
        
    </div>
  )
}

export default Sidebar
import React from 'react'
const Navbar = () => {

  return (
    <div className='Navbar'>
        <div className='Navbar_Left'>
        <a href={'karimAldeen'} download >
          <button> Download CV</button>
          </a> 
        </div>
        <div className='Navbar_Mid'>
        <a href='#HomePage'>Home</a>

           <a href='#Services'>Services</a>
            <a href='#Expertise'>Experience</a>
            <a href='#Footer'>Contact</a>

        </div>
        <div className='Navbar_Right'>
        <img src="KarimLogo.svg" width="70px" height="70px"  />
        <div  id='App'></div>
        </div>

    </div>
  )
}

export default Navbar
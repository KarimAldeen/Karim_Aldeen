import React from 'react'
const Navbar = () => {

  return (
    <div className='Navbar'>
        <div className='Navbar_Left'>
        <a href='../Karim_CV.pdf' download >
          <button> Download CV</button>
          </a> 
        </div>
        <div className='Navbar_Mid'>
        <a href='#Home_Page'>Home</a>

           <a href='#Best_Services'>Services</a>
            <a href='#MY_SKIlls'>Skills</a>
            <a href='#What_Im_Looking_For'>Looking For</a>

        </div>
        <div className='Navbar_Right'>
        <img src="KarimLogo.svg" width="40px" height="40px"  />
        <div  id='App'></div>
        </div>

    </div>
  )
}

export default Navbar
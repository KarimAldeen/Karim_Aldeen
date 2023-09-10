import Home1_BG from '../Components/Home1_BG'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const page = () => {
  
  return (
    <div className='Home'>
      <Navbar/>
      <Sidebar/>
      <Home1_BG/>
    
    </div>
  )
}

export default page
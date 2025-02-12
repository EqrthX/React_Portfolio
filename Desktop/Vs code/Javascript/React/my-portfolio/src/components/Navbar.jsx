import { Earth } from 'lucide-react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='bg-[#BDD2E9] flex items-center w-full text-black sticky top-0 z-50'>
        <div className='container max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3'>
            <div className='flex gap-3 items-center'>
                <Earth size={52} />
                <span className='text-3xl font-bold'>Earth</span>
            </div>

            <ul className='font-medium  gap-5 text-lg uppercase tracking-wider hidden md:flex'>
                
                <li className='transition-color duration-200 ease-out hover:text-amber-700 border-b-4 border-transparent hover:border-amber-700 cursor-pointer fo'>
                    <Link to='hero' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    offset={-80}
                    isDynamic={true}>
                    Home
                    </Link>
                </li>
                
                <li className='transition-color duration-200 ease-out hover:text-amber-700 border-b-4 border-transparent hover:border-amber-700 cursor-pointer'>
                    <Link to='skills' 
                    smooth={true} 
                    duration={500} 
                    offset={-80}
                    spy={true}
                    isDynamic={true}>
                    Skills
                    </Link>
                </li>

                <li className='transition-color duration-200 ease-out hover:text-amber-700 border-b-4 border-transparent hover:border-amber-700 cursor-pointer'>
                    <Link to='project'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    offset={-80}
                    isDynamic={true}>
                    Project
                    </Link>
                </li>

                <li className='transition-color duration-200 ease-out hover:text-amber-700 border-b-4 border-transparent hover:border-amber-700 cursor-pointer'>
                    <Link to='contact'
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    isDynamic={true}>
                    Contact Us
                    </Link>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

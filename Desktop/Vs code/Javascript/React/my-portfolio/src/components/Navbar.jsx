import { AlignJustify, Earth, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-[#BDD2E9] flex items-center w-full text-black sticky top-0 z-50'>
        <div className='container max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3'>
            <div className='flex gap-3 items-center'>
                <Earth size={52} />
                <span className='text-3xl font-bold'>Earth</span>
            </div>
            
            <div className='sm:hidden -scale-z-90'>
               <button onClick={() => setIsOpen(!isOpen)} className='transition-transform duration-200 ease-in-out'>
                    {isOpen ? <X size={32} className='rotate-180'/> : <AlignJustify size={32} className='rotate-0'/>}
               </button>
            </div>
            
            {/* แสดงสำหรับจอใหญ่ */}
            <ul className='font-medium  gap-5 text-lg uppercase tracking-wider hidden sm:flex'>
                {["home", "skills", "project", "contact"].map((item, index) => (
                    <li key={index} 
                    className='transition-color duration-200 ease-out hover:text-amber-700 border-b-4 border-transparent hover:border-amber-700 cursor-pointer'>
                    <Link to={item} smooth={true} duration={500} spy={true} offset={-80} isDynamic={true}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
                
            </ul>

            {/* แสดงสำหรับมือถือ */}

            <div 
            className={`absolute top-16 right-4 bg-[#BDD2E9] rounded-lg p-1 w-[200px] transition-all duration-300 
            ease-in-out ${isOpen ? "right-4 opacity-100" : "right-[-100%] opacity-0"} sm:hidden block`}>
                <ul className='font-medium text-lg uppercase tracking-wider flex flex-col items-center py-4'>
                    {["home", "skills", "project", "contact"].map((item, index) => (
                        <li
                            key={index}
                            className='py-3 w-full text-center transition-colors hover:bg-amber-500 rounded-lg '
                        >
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                isDynamic={true}
                                onClick={() => setIsOpen(false)} //กดแล้วปิดเมนู
                            >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

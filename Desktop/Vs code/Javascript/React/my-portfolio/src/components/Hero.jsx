import earth from '../assets/earth.jpg'

const Hero = () => {
  return (
    <section id="home" className='container min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 p-4'>

      {/* จอใหญ่ */}
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left'>
        <div className=''>
            <h1 className='text-[40px] font-black mb-2'>Hello, I&apos;m Nontprawitch Saetang</h1>
            <p className='text-lg font-semibold'>Welcome to my portfolio</p>
        </div>
      </div>

      <div className='w-full md:w-1/2 flex justify-center '>
            <img 
            src={earth} 
            className='w-full max-w-[300px] md:max-w-[500px] mx-auto rounded-full border-7 border-b-indigo-800 border-l-cyan-800 border-t-emerald-800 border-r-fuchsia-800 shadow-2xl'/>
      </div>

    </section>
  )
}

export default Hero

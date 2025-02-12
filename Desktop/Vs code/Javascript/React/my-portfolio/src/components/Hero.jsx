import earth from '../assets/earth.jpg'

const Hero = () => {
  return (
    <section id="hero" className='container min-h-screen flex justify-center items-center top-0'>

      <div className='w-1/2 flex items-center justify-center'>
        <div className=''>
            <h1 className='text-[40px] font-black mb-2'>Hello, I&apos;m Nontprawitch Saetang</h1>
            <p className='text-lg font-semibold'>Welcome to my portfolio</p>
        </div>
      </div>

      <div className='w-1/2 flex justify-center'>
            <img src={earth} className='w-full h-auto max-w-[500px] mx-auto rounded-full border-7 border-b-indigo-800 border-l-cyan-800 border-t-emerald-800 border-r-fuchsia-800 shadow-2xl'/>
      </div>

    </section>
  )
}

export default Hero

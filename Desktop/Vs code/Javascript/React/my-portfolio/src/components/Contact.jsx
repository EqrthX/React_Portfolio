import { Facebook, Mail, Phone } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className='container min-h-screen flex items-start'>
        
        <div className='w-full flex items-center justify-center flex-col'>

          <h1 className='text-[40px] font-black uppercase tracking-wider'>Contact Us</h1>
          
          <div className="mt-5 flex flex-col">

            <div className="flex items-center gap-5 mb-5">
              <div className="bg-gray-100 p-3 rounded-lg hover:bg-blue-500 transition-colors">
                <Facebook size={32} className="hover:text-white transition-colors"/>
              </div>
              <h3 className="text-2xl font-semibold">Nontprawitch Saetang</h3>
            </div>

            <div className="flex items-center gap-5 mb-5">
              <div className="bg-gray-100 p-3 rounded-lg hover:bg-amber-500 transition-colors">
                <Mail size={32} className="hover:text-white transition-colors"/>
              </div>
              <h3 className="text-2xl font-semibold">nontprawitch.saetang@gmail.com</h3>
            </div>

            <div className="flex items-center gap-5 mb-5">
              <div className="bg-gray-100 p-3 rounded-lg hover:bg-emerald-500 transition-colors">
                <Phone size={32} className="hover:text-white transition-colors"/>
              </div>
              <h3 className="text-2xl font-semibold">+66 64 912 9021</h3>
            </div>

            <form className="bg-blue-600 h-auto p-5 rounded-xl mb-5">
              <div className="flex flex-col">
                <span className="text-white uppercase tracking-widest mb-2 ">Full Name</span>
                <input className="w-auto bg-white p-1 rounded-lg mb-2 focus:border-amber-500 focus:outline focus:outline-amber-500"/>
              </div>

              <div className="flex flex-col">
                <span className="text-white uppercase tracking-widest mb-2 ">Email</span>
                <input className="w-auto bg-white p-1 rounded-lg mb-2 focus:border-amber-500 focus:outline focus:outline-amber-500"/>
              </div>

              <div className="flex flex-col">
                <span className="text-white uppercase tracking-widest mb-2 ">Subject</span>
                <input className="w-auto bg-white p-1 rounded-lg mb-2 focus:border-amber-500 focus:outline focus:outline-amber-500"/>
              </div>

              <div className="flex flex-col">
                <span className="text-white uppercase tracking-widest mb-2 ">Tell us more about your project *</span>
                <textarea rows={4} className="w-auto bg-white p-1 rounded-lg mb-2 focus:border-amber-500 focus:outline focus:outline-amber-500"/>
              </div>

              <button className="mx-auto w-full bg-white p-1 rounded-lg mt-2 transition-colors hover:bg-gray-200 ">
                Send Message
              </button>
            </form>
            
            
          </div>

        </div>
    
          
    
    </section>
  )
}

export default Contact

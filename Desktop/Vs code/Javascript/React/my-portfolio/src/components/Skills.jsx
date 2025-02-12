
const Skills = () => {
  return (
    <section id="skills" className='container min-h-screen flex items-start'>
    
        <div className='w-full flex items-center justify-center flex-col'>
            <h1 className='text-[40px] font-black uppercase tracking-wider'>Skill</h1>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-screen-lg justify-center">

                {/* Front-End */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">

                <h3 className="text-lg font-semibold mb-3">Front-End</h3>
                <ul className="text-left ml-6 list-disc">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
                
              </div>

              {/* Back-End */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-3">Back-End</h3>
                  <ul className="text-left ml-6 list-disc">
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                  </ul>
              </div>

              {/* Tool */}
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-3">Tools</h3>
                  <ul className="text-left ml-6 list-disc">
                    <li>Github</li>
                    <li>XAMPP</li>
                    <li>VS Code</li>
                    <li>Post man</li>
                  </ul>
              </div>

              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
                  <ul className="text-left ml-6 list-disc">
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                    <li>Problem-solving</li>
                  </ul>
              </div>
              
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">

                <h3 className="text-lg font-semibold mb-3">Language Proficiency</h3>
                <ul className="text-left">

                  <li className="font-bold">Thai</li>
                  <div className="progress-bar bg-gray-300 rounded-full w-full h-5 mt-2 mb-2">
                    <div className="bg-yellow-500 rounded-full h-5" style={{ width: '100%' }}></div>
                  </div>

                  <li className="font-bold">English</li>
                  <div className="progress-bar bg-gray-300 rounded-full w-full h-5 mt-2">
                    <div className="bg-green-500 rounded-full h-5" style={{ width: '50%' }}></div>
                  </div>
                  
                </ul>

              </div>

            </div>
        </div>
    

    
    </section>
  )
}

export default Skills

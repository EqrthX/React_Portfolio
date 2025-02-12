import EcomPHP from '../assets/PHP/E-com_PHP.png'
import AppAndroid from '../assets/Android/BooKLover_ProjectAndroid.png'
import BlankImg from '../assets/Blank.jpg'

const Project = () => {
  
  const projects = [
    {
      title: "E-commerce Web Application",
      description: "A full-stack e-commerce final project in year 2 using HTML CSS JavaScrpit PHP MySQL.",
      image: EcomPHP,
      github: "https://github.com/EqrthX/SI232-Project-Final-year2-PHP.git"
    },
    {
      title: "Book Lover App",
      description: "An Android app for add book your love it using SQLite.",
      image: AppAndroid,
      github: "https://github.com/EqrthX/Book_Lover.git"
    },
    {
      title: "CRUD Web Application",
      description: "CRUD using Node.js Express MySQL Sequelize and Test API with Postman",
      image: BlankImg,
      github: "https://github.com/EqrthX/CRUD-with-MySQL.git"
    }
  ]

  return (
    <section id="project" className='container min-h-screen flex items-start'>
    
        <div className='w-full flex items-center justify-center flex-col'>
          <h1 className='text-[40px] font-black uppercase tracking-wider'>My Projects</h1>
        
    
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-3"
              >
                <img src={project.image} alt={project.title}  className="w-full h-64 object-contain justify-center items-center p-3 rounded-lg bg-gray-100"/>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-center">{project.title}</h3>
                  <p className='text-lg mb-3'>{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    </section>
  )
}

export default Project

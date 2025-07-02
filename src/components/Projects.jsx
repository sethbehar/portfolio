import React from 'react'

const Card = ({ title, description, link, img}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
            <div className='flex flex-row gap-3 items-center mb-4'>
                <img src={img} alt="Project" className="" width={45} height={20} />
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-700 mb-4 text-sm">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500 hover:text-white border-1 transform duration-200 text-sm border-blue-400 p-2 rounded-lg">View Project</a>
        </div>
    )
}

const Projects = () => {
    
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-12 gap-12 text-xl"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <h1>Projects</h1>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <Card title={'Internshark'} description={'A platform for finding internships'} link={'https://internshark.us'} img={'/internshark.svg'}/>
                    <Card title={'SaaS Docs'} description={'Documentation and template repo for building SaaS applications'} link={'https://saasdocs.vercel.app'} img={'/saasdocs.png'}/>
                    <Card title={'Internos'} description={'AI powered internship matching platform'} link={'https://internos.vercel.app'} img={'/internos.png'}/>
                </div>
            </div>
        </div>
    )
}

export default Projects
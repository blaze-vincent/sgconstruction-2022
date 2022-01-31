import FeaturedProject from "../components/content/projects/featuredProject";
import Project from "../components/content/projects/project";

export default function Projects(){

  const projects = [
  {
    title: 'COMMERCIAL',
    body: "A recognized leader in commercial building projects, we provide services for new construction, renovation and retrofit projects throughout Southeast Iowa. S.G. Construction is qualified to construct virtually any type of project, and has all of the necessary resources, equipment and manpower to meet each client's specific project needs."
  },
  {
    title: 'INDUSTRIAL',
    body: "S.G. Construction provides new construction, design/build, renovation and retrofit for various manufacturing/industrial facilities. We are qualified to construct virtually any type of project, and possess all of the necessary resources, equipment, and manpower to meet each client's specific needs."
  },
  {
    title: 'COMMUNITY',
    body: "With years of experience constructing and renovating public buildings such as schools, dorms, churches and more, S.G. Construction has the ability to improve your community."
  }
  ]

  return <div
    className="flex flex-col gap-8 max-w-[55rem] m-auto my-8 text-lg text-neutral-700 p-4"
  >
    <FeaturedProject 
      title='SCC Blackhawk Tower'
      body='S.G. Construction acted as general contractor to coordinate the quick schedule for prefab dormitories at Southeastern Community College. The project began in August and students moved in 5 months later!'
    />
    
    {projects.map((project, index) => <Project key={index} title={project.title} body={project.body}/>)}

  </div>
}
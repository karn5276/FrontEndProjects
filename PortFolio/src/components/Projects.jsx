import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section className="bg-gray-100 py-20" id="projects">
    <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <ProjectCard 
        title="Project One" 
        description="A responsive web application built with React." 
        image="https://via.placeholder.com/300" 
      />
      <ProjectCard 
        title="Project Two" 
        description="An e-commerce platform with dynamic features." 
        image="https://via.placeholder.com/300" 
      />
      <ProjectCard 
        title="Project Three" 
        description="A real-time chat app using WebSocket." 
        image="https://via.placeholder.com/300" 
      />
    </div>
  </section>
);

export default Projects;
import '../css/ProjectSection.css'
import GISMap from '../public/GISMap.webp'
export default function ProjectSection() {
  return (
    <>
      <h1>Project Section</h1>
      <div className="projectItem">
        <h2>Public Health Surveillance System</h2>
        <a href="https://github.com/KirSpaceB/public-health-surveillence-system" target="_blank" rel="noopener noreferrer">
          <img 
            src={GISMap} 
            alt="Project Thumbnail" 
            className="projectImage" 
          />
        </a>
      </div>
    </>
  )
}

import '../css/ProjectSection.css'
import practiceImage from '../public/textures/Mars_Map.webp'
export default function ProjectSection() {
  return (
    <>
      <h1>Project Section</h1>
      <div className="projectItem">
        <a href="https://github.com/your-username/your-project" target="_blank" rel="noopener noreferrer">
          <img 
            src={practiceImage} 
            alt="Project Thumbnail" 
            className="projectImage" 
          />
        </a>
        <p>Check out my project on GitHub by clicking the image!</p>
      </div>
    </>
  )
}

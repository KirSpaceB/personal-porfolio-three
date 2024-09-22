import personalProfilePic from '../public/2023-02-22 Kirk Flores Profile Picture.jpg'
import '../css/IntroductionSection.css'
export default function IntroductionSection() {
  return (
    <div className="introductionSection">
      <h2>Personal Intro</h2>
      <img src={personalProfilePic} className='introductionSectionProfilePicture' alt='Profile Picture'/>
      <p className="introText">
        I'm a recent graduate and aspiring software engineer with internships at Esri and Marketeq Digital. My strongest skills include JavaScript, React, .NET C#, Java, and Python. I’ve contributed to both large-scale enterprise projects and agile startup solutions, and I’m passionate about problem-solving and creating efficient, scalable software. I also enjoy contributing to open-source projects, where I continue to learn and grow. Excited to make an impact in the tech world!
      </p>

      <div className="additionalInfo">
        <p><strong>Hobbies:</strong> Basketball, Pickleball, Snowboarding, Anime `{'>:D'}`</p>
        <p><strong>Technologies:</strong> C#, Java, C, C++, Framer Motion, Three.js, React, TailwindCSS</p>
      </div>
    </div>
  )
}

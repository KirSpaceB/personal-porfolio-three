import personalProfilePic from '../public/2023-02-22 Kirk Flores Profile Picture.jpg'
import '../css/IntroductionSection.css'
export default function IntroductionSection() {
  return (
    <div className="introductionSection">
      <h2>Personal Intro</h2>
      <img src={personalProfilePic} className='introductionSectionProfilePicture' alt='Profile Picture'/>
      <p className="introText">
        PogChampsPogChampsPogChampsPogChampsPogChamps
        PogChampsPogChampsPogChampsPogChampsPogChampsPogChamps
        PogChampsPogChampsPogChampsPogChampsPogChamps
        PogChampsPogChampsPogChampsPogChamps
        PogChampsPogChampsPogChampsPogChamps
      </p>

      <div className="additionalInfo">
        <p><strong>Currently Attending:</strong> Georgia Institute Of Technology</p>
        <p><strong>Hobbies:</strong> Basketball, Pickleball, Snowboarding, Anime `{'>:D'}`</p>
        <p><strong>Technologies:</strong> C#, Java, C, C++, Framer Motion, Three.js, React, TailwindCSS</p>
      </div>
    </div>
  )
}

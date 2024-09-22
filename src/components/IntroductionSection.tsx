import personalProfilePic from '../public/2023-02-22 Kirk Flores Profile Picture.jpg'
import '../css/IntroductionSection.css'
export default function IntroductionSection() {
  return (
    <div>
      <h2>Personal Intro</h2>
      <img src={personalProfilePic} className='introductionSectionProfilePicture'>

      </img>
      <p>This is a description of one of my projects.</p>
    </div>
  )
}

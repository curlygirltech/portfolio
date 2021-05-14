import './resume.scss'
import jc from '../../images/0001.jpg'


export default function Resume() {
  return (
    <div className="resume" id="resume">
      
      

      <a href="https://drive.google.com/file/d/16o3r8-YwZWgUIaEnBMEPb3bga3LYyt7Y/view?usp=sharing">
        <h3>Download my resume</h3>
        <img src="download-symbol.png" alt="" />
      </a>
      
      <div className="download">
      <img src={jc} alt="" />
      </div>
    
    </div>
  )
}

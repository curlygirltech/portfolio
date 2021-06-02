// import { Link } from "react-router-dom";
import "./projects.scss";
import "../../services/projectData"
import { projectData } from "../../services/projectData";
import Project from "../../components/Project";

export default function Projects(props) {
  const projectJSX = projectData.map((project, index) =>
    <Project
      key={index}
      image={project.image}
      alt={project.alt}
      title={project.title}
      description={project.description}
      site={project.site}
      github={project.github}
    />
  )
  return (
    <section>
      <h2>Projects</h2>
      <p>Check out my work</p>
      <div className="projects-div">
        {projectJSX}
      </div>
    </section>

  )
}
    






//     <>
//       <div className="projects" id="projects">
//         <h1> Check out My Work</h1>
//         <div className="projects-container">
//           <div className="item">
//             <a href="https://heuristic-ptolemy-d4f1c6.netlify.app/">
//               <img src="technologic.png" alt="" />
//             </a>
//           </div>
//           <div className="projects-about">
//             <h3>Technologic</h3>
//             <p>
//               Technologic is an inventory app inspired by Craigslist where users
//               buy and sell pre-loved tech devices. Users can create an account
//               and contact sellers or create posts for items that they wish to
//               sell.
//             </p>
//             <p>
//               This application was built in collaboration with engineers using
//               MongoDB, Express, React, and NodeJS
//             </p>
//             <div className="project-button">
//               <a href="https://heuristic-ptolemy-d4f1c6.netlify.app/">
//                 <button>Live Site</button>
//               </a>
//               <a href="https://github.com/sponticel/technologic-app">
//                 <button>GitHub Repo</button>
//               </a>
//             </div>

//             <div className="projects-container">
//               <div className="item">
//                 <a href="https://sharespaceapp.netlify.app/">
//                   <img src="sharespace.png" alt="" />
//                 </a>
//               </div>
//               <div className="projects-about">
//                 <h3>ShareSpace</h3>
//                 <p>
//                   Sharespace is a full stack app where guests can rent luxury
//                   cabins homes in their place of choice. Users can create an
//                   account, book stays, and manage their trips on their account
//                   page.
//                 </p>
//                 <p>
//                   This application was built using Ruby, Ruby on Rails, and
//                   React
//                 </p>
//                 <div className="project-button">
//                   <a href="https://sharespaceapp.netlify.app/">
//                     <button>Live Site</button>
//                   </a>
//                   <a href="https://github.com/curlygirltech/sharespace">
//                     <button>GitHub Repo</button>
//                   </a>

//                   <div className="projects-container">
//                     <div className="item">
//                       <a href="https://curlygirltech.github.io/Discographi/">
//                         <img src="discographi.png" alt="" />
//                       </a>
//                     </div>
//                     <div classname="projects-about">
//                       <h3>Discographi</h3>
//                       <p>
//                         dsi is a full stack app where guests can rent
//                         luxury cabins homes in their place of choice. Users can
//                         create an account, book stays, and manage their trips on
//                         their account page.
//                       </p>
//                       <p>
//                         This application was built using Ruby, Ruby on Rails,
//                         and React
//                       </p>
//                     </div>
//                     <div className="project-button">
//                       <a href="https://curlygirltech.github.io/Discographi/">
//                         <button>Live Site</button>
//                       </a>
//                       <a href="https://github.com/curlygirltech/Discographi">
//                         <button>GitHub Repo</button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

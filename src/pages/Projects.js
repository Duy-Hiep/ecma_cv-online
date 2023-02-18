import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import axios from "axios";
import { getProjects } from "../api/project";



export const ProjectsPage = () => {
  const [Project ,setProject]=useState([]);
  useEffect(()=>{
    getProjects()
    .then(Project=>setProject(Project))
  },[]);
  return `
    ${Header()}
    <div class="ds-work-section  ">
    <div class="container ">
         <h2 class="ds-heading">Projects</h2>
         <div class="ds-work-list-section">
           <div class="ds-work-list">
             
             ${Project.map((Project) => {
              return`
              <div class="grid grid-cols-2 gap-2 mt-6">
                 <div class="">
                     <section>
                     
                      <h3 class="ds-work-tilte">${Project.name}</h3>
                      <p>${Project.author}</p>
                      <span class="p-2 border rounded">${Project.date}</span> </br>
                      <a href="${Project.github}" class="ds-button inline-block" target="_blank">Details</a>
                     
                     </section>
                 </div>
                 <div class="">
                     <figure><img src="${Project.gallery}" class="w-full"></figure>
                 </div>
                </div>
                 `
                }).join("")}
             
           </div>
           
           <div class="text-center ">
             <a href="https://github.com/Duy-Hiep" target="_blank" class="ds-button">See more on Github</a>
           </div>
         </div>
    </div>
  </div>
    ${Footer()}`;

};
export default ProjectsPage;

import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import Header from "../components/Header";
import { getProjects } from "../api/project";
import axios from "axios";
import { getAbouts } from "../api/about";


const AboutPage = () => {
  const [About, setAbout] = useState([]);
  useEffect(() => {
    getAbouts()
    .then(Project => setAbout(Project))
  }, [])
    return `
        ${Header()}
        <div class="ds-about-section">
        <div class="container">
          <section>
          ${About.map((Project) => {
            return `
            <h2 class="ds-heading">ABOUT ME</h2>
            <p>${Project.aboutMe1}<br> 
              ${Project.aboutMe2} </p>
              `
          })} 
            <div class="about font-bold text-[30px]">

              <h2 class="ds-heading">skill me</h2>

              <div class="grid grid-cols-3 gap-4 mx-4 place-items-center">

                <div class="img max-w-[150px] text-center item-center">
                  <img src="https://res.cloudinary.com/duy-hiep/image/upload/v1676655010/du_an_mau_2022/bootstrap_pbmuzc.png" alt="" >
                </div>

                <div class="img max-w-[150px] text-center item-center">
                  <img src="https://res.cloudinary.com/duy-hiep/image/upload/v1676654946/du_an_mau_2022/css-3_vb509h.png" alt="" >
                </div>

                <div class="img max-w-[150px] text-center item-center">
                  <img src="https://res.cloudinary.com/duy-hiep/image/upload/v1676654946/du_an_mau_2022/js_j9wtnk.png" alt="" >
                </div>

                <div class="img max-w-[150px] text-center item-center">
                  <img src="https://res.cloudinary.com/duy-hiep/image/upload/v1676654946/du_an_mau_2022/html-5_xxb58n.png" alt="" >
                </div>

                <div class="img max-w-[150px] text-center item-center">
                  <img src="https://res.cloudinary.com/duy-hiep/image/upload/v1654235690/samples/cloudinary-icon.png" alt="" >
                </div>

              </div>
            </div>

      
 
          </section>
        </div>
      </div>
      ${Footer()}`;
      
};

export default AboutPage;

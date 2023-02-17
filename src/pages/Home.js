import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import axios from "axios";
import { getUser } from "../api/user";

const HomePage = () => {
    const [Project, setProject] = useState([]);
    useEffect(() => {
      getUser()
      .then(Project => setProject(Project))
    },[])
  return /*html*/ `
    ${Header()}
    <div class="ds-banner ">
      <div class="container">
        <div class="row">
        ${Project.map((Project) => {
          return`
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mt-4 ">
            <figure>
              <img src="${Project.img}" class="rounded-5 w-[450px]">
            </figure>
          </div>
          <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <section>
           
              <h1>
              <span>Chào bạn</span>
              ${Project.name} 
            </h1>
            <ul class="ds-numbervalulist">
              <li>
                <strong class="tt">${Project.thongTin}</strong>
        
              </li>
              <li>
                <strong>Học Vấn: ${Project.hocVan}</strong>
        
              </li>
              <li>
                <strong>Điện Thoại: ${Project.number} </strong>
                
              </li>
              <li>
                <strong>Email: ${Project.email} </strong>
                
              </li>
              <li>
                <strong>Địa chỉ: ${Project.address} </strong>
                
              </li>
              
            </ul>
           
                
            </section>
          </div>
          `
        })}
        </div>
      </div>
    </div>
    ${Footer()}
    `;
    
};

export default HomePage;

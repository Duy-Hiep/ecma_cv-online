import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import axios from "axios";
import { getUser } from "../api/user";

const HomePage = () => {
    const [Home, setHome] = useState([]);
    useEffect(() => {
      getUser()
      .then(Project => setHome(Project))
    },[])
  return /*html*/ `
    ${Header()}
    <div class="ds-banner ">
      <div class="container">
        <div class="row">
        ${Home.map((Project) => {
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
                <strong class="border-2 p-1 rounded-md hover:border-[#F26464]">Học Vấn: ${Project.hocVan}</strong>
        
              </li>
              <li>
                <strong class="border-2 p-1 rounded-md hover:border-[#F26464]">Điện Thoại: ${Project.number} </strong>
                
              </li>
              <li>
                <strong class="border-2 p-1 rounded-md hover:border-[#F26464]">Email: ${Project.email} </strong>
                
              </li>
              <li>
                <strong class="border-2 p-1 rounded-md hover:border-[#F26464]">Địa chỉ: ${Project.address} </strong>
                
              </li>
              
              <li>
                <div class="ds-button-sec text-center mt-4">
                  <a href="#" class="ds-button">Download Resume</a>
                </div>
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

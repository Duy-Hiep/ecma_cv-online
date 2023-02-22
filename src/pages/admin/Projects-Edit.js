import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../lib";
import axios from "axios";
// import { projects } from "../../data";
const AdminProjectEditPage = ({ProjectId}) => {

    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(ProjectId));
            } 
            catch (error) {
                console.log(error);
            }
        })();
    },[])
    
    useEffect(() => {

        const form = document.querySelector("#form-edit");
        const projectName = document.querySelector("#project-name");  
        const projectAuthor = document.querySelector("#project-author");
        const projectDates = document.querySelector("#project-date");  
        const projectGithub = document.querySelector("#project-gitHub");
        const projectImg = document.querySelector("#project-images");

        form.addEventListener("submit", async (e) => {

            e.preventDefault(); // disable reload

            let imgURL = "";
            if(projectImg.files.length > 0){
                imgURL = await upLoadFiles(projectImg.files)
            }
            else{
                imgURL = projectImg.accept
            };

            try {
                const formData = {
                    id: ProjectId,
                    name: projectName.value,
                    author: projectAuthor.value,
                    date: projectDates.value,
                    github: projectGithub.value,
                    gallery: imgURL,
                };
                await updateProject(formData);
                router.navigate("admin/Projects");
            }
             catch (error) {
                console.log(error);
            }
            

            // setTimeOut

            
        });
    });

    const upLoadFiles = async (files) => {
        if(files){
          const cloud_name = "duy-hiep";
        const preset_name = "demo_upload";
        const folder_name = "ECMA";
        const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
        const urls = [];
  
        const formData = new FormData(); //key:values
  
        formData.append("upload_preset", preset_name);
        formData.append("folder", folder_name);
  
        for(const file of files){
          formData.append("file", file);
  
          const response = await axios.post(api, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          });
            urls.push(response.data.secure_url)  
        }
        if (urls.length == 1) {
            return urls[0];
          } else {
            return urls;
          }
        
        }
        
      };
    
  return/*html*/ `
    <div class="container">
        <h1>Edit dự án</h1>
        <form id="form-edit">

            <div class="form-group mb-3">
                <label for="">Tên sản phẩm</label>
                <input type="text" id="project-name" class="form-control" value="${project.name}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Mô tả sản phẩm</label>
                <input type="text" id="project-author" class="form-control"  value="${project.author}"/>
            </div>
            
            <div class="form-group mb-3">
                <label for="">Ngày Hoàn Thiện</label>
                <input type="text" id="project-date" class="form-control"  value="${project.date}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Ảnh sản phẩm</label>
                <input type="file" id="project-images" class="form-control"  value="${project.gallery}"/>
            </div>

            
            <div class="form-group mb-3">
                <label for="">Link Github</label>
                <input type="text" id="project-gitHub" class="form-control"  value="${project.github}"/>
            </div>
            
            <div class="form-group">
                <button class=" btn btn-primary"> Sửa</button>
            </div>
            
        </form>
    </div>
    `;
  
}

export default AdminProjectEditPage;
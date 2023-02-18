import { addProject } from "../../api/project";
import { router, useEffect } from "../../lib";
import axios from "axios";
// import { projects } from "../../data";
const AdminProjectAddPage = () => {
    useEffect(() => {

        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");  
        const projectAuthor = document.querySelector("#project-author");  
        const projectImages = document.querySelector("#project-images");  
        const projectDates = document.querySelector("#project-date");  
        const projectGithub = document.querySelector("#project-gitHub");  

        form.addEventListener("submit", async (e) => {

            e.preventDefault(); // disable reload
            
            const urls = await upLoadFiles(projectImages.files);
            try {
                const formData = {
                
                    name: projectName.value,
                    author: projectAuthor.value,
                    date: projectDates.value,
                    github: projectGithub.value,
                    gallery: urls,
                };

                await addProject(formData);
                router.navigate("/admin/Projects");
            } 

            catch (error) {
                console.log(error);
            }
            

            // setTimeOut

            // axios ("http://localhost:3000/projects", formData)
            // // fetch(`http://localhost:3000/projects`, {
            // //     method: "POST",
            // //     headers: {
            // //         "Content-Type": "application/json",
            // //     },
            // //     body: JSON.stringify(formData),
            // // })
            // // .then(() => router.navigate("admin/Projects"))
            // // .then((error) => console.log(error));
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

        const response =await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });
          urls.push(response.data.secure_url)  
      }
      return urls;
      }
      
    };

  return `
  <div class="container">
  <h1>Thêm sản phẩm</h1>
  <form action="" id="form-add">

    <div class="form-group mb-3">
      <label for="">Tên sản phẩm</label>
      <input type="text" id="project-name" class="form-control">
    </div>

    <div class="form-group mb-3">
      <label for="">Mô tả sản phẩm</label>
      <input type="text" id="project-author" class="form-control">
    </div>

    <div class="form-group mb-3">
    <label for="">Ảnh sản phẩm</label>
    <input type="file" id="project-images" multiple class="form-control">
    </div>

    <div class="form-group mb-3">
    <label for="">Ngày Hoàn Thiện</label>
    <input type="date" id="project-date" multiple class="form-control">
    </div>

    <div class="form-group mb-3">
    <label for="">Link Github</label>
    <input type="text" id="project-gitHub" multiple class="form-control">
    </div>

    <div class="form-group">
      <button class="btn btn-primary"> Thêm Sản Phẩm</button>
    </div>
  </form>
</div>
    `;
  
}

export default AdminProjectAddPage;
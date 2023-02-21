import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../lib";
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

        form.addEventListener("submit", async (e) => {

            e.preventDefault(); // disable reload
            try {
                const formData = {
                    id: ProjectId,
                    name: projectName.value,
                    author: projectAuthor.value,
                    date: projectDates.value,
                    github: projectGithub.value,
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
    
  return `
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
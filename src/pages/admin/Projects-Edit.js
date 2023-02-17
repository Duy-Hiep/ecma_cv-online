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

        form.addEventListener("submit", async (e) => {

            e.preventDefault(); // disable reload
            try {
                const formData = {
                    id: ProjectId,
                    name: projectName.value,
                    author: projectAuthor.value,
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
    <div>
        <h1>Edit dự án</h1>
        <form id="form-edit">
            <input type="text" id="project-name" class="border" value="${project.name}"/>
            <input type="text" id="project-author" class="border"  value="${project.author}"/>
            <button >Sửa</button>
        </form>
    </div>
    `;
  
}

export default AdminProjectEditPage;
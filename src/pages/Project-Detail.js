import { projects } from "../data";

export const ProjectDetailPage = ({data: {projectId} }) => {
  //find
  const currentProject = projects.find((project) => project.id == projectId);
  if(!currentProject) return `Loading...`;
  return /*html*/`<div>Project-Detail</div>
    ${currentProject.name}

    <hr/>

    ${currentProject.teams ? `
      <h2>Team</h2>
      <ul>
        ${currentProject.teams.map((member) => `<li>${member.name}</li>`).join("")}
      </ul>`
    : ""
  }
  `;
};
export default ProjectDetailPage;

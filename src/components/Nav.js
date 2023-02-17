import { menus } from "../data";

const Nav = () => {
    return (
        `
            
            <ul class="ds-social2 ">
                ${menus.map(menu => `<a href="${menu.link}" class="text-decoration-none ml-2 text-[#000000e3] hover:text-[#F26464]">${menu.name}</a>`).join("")}  
              </ul>

            
        `
    )
}
export default Nav;
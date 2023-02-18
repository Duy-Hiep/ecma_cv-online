import { menus } from "../data";

const Nav = () => {
    return (
        `
            
            <ul class="ds-social2 ">
                ${menus.map(menu => `<a href="${menu.link}" data-navigo class="text-decoration-none ml-2 text-[#151515d4] font-bold hover:text-[#F26464]">${menu.name}</a>`).join("")}  
              </ul>

            
        `
    )
}
export default Nav;
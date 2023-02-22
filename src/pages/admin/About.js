import axios from "axios";
import { useEffect, useState,router } from "../../lib";
import HeaderAdmin from "../../components/HeaderAdmin";
import { getAbouts, updateAbout } from "../../api/about";

const AdminAboutPage = () => {
    const [About, setAbout] = useState({});
    useEffect (() => {
        (async () => {
            try {
                setAbout(await getAbouts())
            } catch (error) {
                console.log(error);
            }
        })();
    },[])

    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const about1 = document.querySelector("#about-about1");
        const about2 = document.querySelector("#about-about2");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    aboutMe1: about1.value,
                    aboutMe2: about2.value,
                };
                await updateAbout(formData);
                router.navigate("admin/About");
            } catch (error) {
                console.log(error);
            }
        });
    });

    return/*html*/ `
    ${HeaderAdmin()}
    <div class="container">
        <h1>Edit dự án</h1>
        <form id="form-edit">

            <div class="form-group mb-3">
                <label for="">About1</label>
                <input type="text" id="about-about1" class="form-control" value="${About.aboutMe1}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">About2</label>
                <input type="text" id="about-about2" class="form-control"  value="${About.aboutMe2}"/>
            </div>
            
            
            
            <div class="form-group">
                <button class=" btn btn-primary"> Sửa</button>
            </div>
            
        </form>
    </div>
    `;
}
export default AdminAboutPage
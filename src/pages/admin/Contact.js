import axios from "axios";
import { useEffect, useState,router } from "../../lib";
import HeaderAdmin from "../../components/HeaderAdmin";
import { getContact, updateContact } from "../../api/contact";

const AdminContactPage = () => {
    const [About, setAbout] = useState({});

    useEffect(() => {
        (async () => {
            try {
                setAbout(await getContact())
            } catch (error) {
                console.log(error);
            }
        })();
    },[])

    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const title = document.querySelector("#contact-title");
        const address = document.querySelector("#contact-address");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    title: title.value,
                    address: address.value,
                };
                await updateContact(formData);
                router.navigate("admin/Contact");
            } catch (error) {
                console.log(error);
            }
        })
    })

    return/*html*/`
    ${HeaderAdmin()}
    <div class="container">
        <h1>Edit dự án</h1>
        <form id="form-edit">

            <div class="form-group mb-3">
                <label for="">Title</label>
                <input type="text" id="contact-title" class="form-control" value="${About.title}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Address</label>
                <input type="text" id="contact-address" class="form-control"  value="${About.address}"/>
            </div>
            
            
            
            <div class="form-group">
                <button class=" btn btn-primary"> Sửa</button>
            </div>
            
        </form>
    </div>
    `
}
export default AdminContactPage
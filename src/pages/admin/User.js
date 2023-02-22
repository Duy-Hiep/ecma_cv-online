import { getUsers, updateUser } from "../../api/user";
import axios from "axios";
import { useEffect, useState,router } from "../../lib";
import HeaderAdmin from "../../components/HeaderAdmin";

const AdminUserPage = () => {
    const [user, setUser] = useState({});
    
    useEffect (() => {
        (async () => {
            try {
                setUser(await getUsers())
                
            } catch (error) {
                console.log(error);
            }
        })();
    },[])

    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const userThongTin = document.querySelector("#user-thongtin");  
        const userName = document.querySelector("#user-name");
        const userHocVan = document.querySelector("#user-hocVan");  
        const userNumber = document.querySelector("#user-number");
        const userEmail = document.querySelector("#user-email");
        const userAddress = document.querySelector("#user-address");
        const userImg = document.querySelector("#user-img");

        form.addEventListener("submit", async (e) => {

            e.preventDefault(); // disable reload

            let imgURL = "";
            if(userImg.files.length > 0){
                imgURL = await upLoadFiles(userImg.files)
            }
            else{
                imgURL = userImg.accept
            };

            try {
                const formData = {
                    
                    thongTin: userThongTin.value,
                    name: userName.value,
                    hocVan: userHocVan.value,
                    number: userNumber.value, 
                    email: userEmail.value, 
                    address: userAddress.value, 
                    img: imgURL,
                    
                };
                await updateUser(formData);
                router.navigate("admin/User");
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
    ${HeaderAdmin()}
    <div class="container">
        <h1>Edit dự án</h1>
        <form id="form-edit">

            <div class="form-group mb-3">
                <label for="">Tên Thông Tin</label>
                <input type="text" id="user-thongtin" class="form-control" value="${user.thongTin}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Ảnh </label>
                <input type="file" id="user-img" class="form-control" value="${user.img}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Tên</label>
                <input type="text" id="user-name" class="form-control"  value="${user.name}"/>
            </div>
            
            <div class="form-group mb-3">
                <label for="">Học Vấn</label>
                <input type="text" id="user-hocVan" class="form-control"  value="${user.hocVan}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Số Điện Thoại</label>
                <input type="text" id="user-number" class="form-control"  value="${user.number}"/>
            </div>

            
            <div class="form-group mb-3">
                <label for="">Email</label>
                <input type="text" id="user-email" class="form-control"  value="${user.email}"/>
            </div>

            <div class="form-group mb-3">
                <label for="">Địa Chỉ</label>
                <input type="text" id="user-address" class="form-control"  value="${user.address}"/>
            </div>
            
            <div class="form-group">
                <button class=" btn btn-primary"> Sửa</button>
            </div>
            
        </form>
    </div>
    `;

}
export default AdminUserPage
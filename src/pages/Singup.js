import { register } from "../api/auth";
import { router, useEffect } from "../lib";

const signupPage = () => {
  document.title = "MyCV - Signup";

  useEffect(() => {
    const sform = document.querySelector("#_sform");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    sform.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const user = {
          email: email.value,
          password: password.value,
        };
        await register(user);
        router.navigate("/signin");
        alert("Đăng ký thành công!");
      } catch (error) {
        alert("Đăng ký thất bại!");
        console.log(error);
      }
    });
  });

  return /*html*/ ` <div class="tw-bg-gray-100">
    <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
      <div class="tw-w-full tw-max-w-md">
        <form id="_sform" class="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-md">
          <h2 class="tw-text-3xl tw-font-bold tw-text-center tw-mb-2">Đăng Ký Tài Khoản</h2>
          <div class="tw-mb-4">
            <label class="tw-block tw-text-gray-700 tw-font-bold tw-mb-2" for="email"
              >Email</label
            >
            <input
              class="tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700"
              id="email"
              type="email"
              placeholder="Nhập email"
            />
          </div>
          <div class="tw-mb-6">
            <label class="tw-block tw-text-gray-700 tw-font-bold tw-mb-2" for="password"
              >Mật khẩu</label
            >
            <input
              class="tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700"
              id="password"
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button
          class="tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-focus:outline-none tw-focus:shadow-outline"
          type="submit"
        >
          Đăng ký
        </button>
          
        </form>
      </div>
    </div>
  </div>`;
};

export default signupPage;
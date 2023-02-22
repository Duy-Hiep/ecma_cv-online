import { login } from "../api/auth";
import { router, useEffect } from "../lib";

const signinPage = () => {
  document.title = "MyCV - Signin";

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
        await login(user);
        router.navigate("/admin");
        alert("Đăng nhập thành công!");
      } catch (error) {
        alert("Đăng nhập thất bại!");
        console.log(error);
      }
    });
  });

  return /*html*/ ` <div class="tw-bg-gray-100">
  <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
    <div class="tw-w-full tw-max-w-md">
      <form id="_sform" class="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-md">
        <h2 class="tw-text-3xl tw-font-bold tw-text-center tw-mb-2">Đăng nhập</h2>
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
        Đăng nhập
      </button>
        <a href="#/Singup" class="tw-no-underline tw-text-[#666] tw-text-[16px] tw-justify-items-end tw-grid tw-text-end">Đăng Ký </a>
      </form>
    </div>
  </div>
</div>`;
};

export default signinPage;
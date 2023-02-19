import Nav from "./Nav";

const Header = () => {
    return `
        <header>
            
            <div class="container ">
            <div class="ds-header-inner pt-4 mb-5">
              <!-- logo -->
              <a href="#" class="ds-logo text-decoration-none">
                <span>H</span>Nguyen Duy Hiep
              </a>
              <!-- logo -->
            
              <!-- social -->
              ${Nav()}

              <ul class="ds-social">
                <li><a href="https://github.com/Duy-Hiep" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg></a></li>
                <li><a href="https://www.facebook.com/hiep.nguyenduy.9655/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M232 128a104 104 0 1 0-104 104a104.1 104.1 0 0 0 104-104Zm-96 87.6V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32.1 32.1 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.6a88 88 0 1 1 16 0Z"/></svg></a></li>
                <li><a href="https://caodang.fpt.edu.vn/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-7-3.8v-6L1 9l11-6l11 6v8h-2v-6.9l-2 1.1v6Zm0-8.3L18.85 9L12 5.3L5.15 9Zm0 6.025l5-2.7V12.25L12 15l-5-2.75v3.775Zm0-6.025Zm0 2.25Zm0 0Z"/></svg></a></li>
                <li><a href="#/admin/Projects" target="_blank" class="admin">Admin</a></li>
              </ul>
              <!-- social -->
            </div>
        </div>
        </header>
    `;
};
export default Header;
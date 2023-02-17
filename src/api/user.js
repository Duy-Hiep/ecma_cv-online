import instance from "./config";

const getUser = () => {
    return instance.get("/user");
};
export{getUser}
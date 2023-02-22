import instance from "./config";

const getUsers = () => {
    return instance.get("/user");
};

const updateUser = (user) => {
    return instance.put(`/user`, user)
};
export{getUsers, updateUser}
import instance from "./config";

const getContact = () => {
    return instance.get("/contact")
};
export {getContact};
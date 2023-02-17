import instance from "./config";

const getAbouts = () => {
    return instance.get("/about");
};
export {getAbouts}
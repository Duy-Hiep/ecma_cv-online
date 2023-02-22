import instance from "./config";

const getAbouts = () => {
    return instance.get("/about");
};

const updateAbout = (about) => {
    return instance.put("/about", about)
};
export {getAbouts, updateAbout}
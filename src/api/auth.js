import instance from "./config";

const register = (user) => {
  console.log(user);
  return instance.post("/signup", user);
};

const login = (user) => {
  return instance.post("/signin", user);
};

export { register, login };
import { page } from "../lib.js";
import { clearUserData, setUserData, updateNav } from "../util.js";
import { get, post } from "./requester.js";

//TODO Adapt user profile to exam requirement(identity, extra properties, etc..)

const endpoints = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout"
}

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password })
    setUserData(result);
    updateNav();
    page.redirect("/");
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password })
    setUserData(result);
    updateNav();
    page.redirect("/")
}

export async function logout() {
    const promise = get(endpoints.logout)
    clearUserData();

    await promise;
    updateNav();
    page.redirect("/")
}

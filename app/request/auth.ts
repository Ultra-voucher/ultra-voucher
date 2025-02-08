import Cookies from "js-cookie"

type RegisterData = {
    userName: string
    email: string
    password: string
};

type LoginData = {
    userName: string
    password: string
};

export const register = (userData: RegisterData) => {
    const checkUser = Cookies.get("user-profile");

    if (checkUser) {
        throw new Error("Already registered!")
    } else {
        const stringifyUserData = JSON.stringify(userData);
        const saveUserProfile = Cookies.set("user-profile", stringifyUserData);

        saveUserProfile && "Register success"
    }
};

export const login = (loginData: LoginData) => {
    const userProfile = Cookies.get("user-profile");

    if (!userProfile) {
        throw new Error("It's look like you're not registered, please register first");
    }

    const convertUserProfileData: RegisterData = JSON.parse(userProfile);

    if (loginData.userName !== convertUserProfileData.userName) {
        throw new Error("Username not found");
    } else if (loginData.password !== convertUserProfileData.password) {
        throw new Error("Password wrong")
    }

    return convertUserProfileData;
};
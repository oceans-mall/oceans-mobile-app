import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { registerSuccess, registerUser, registerFailure } from "./registerRedux";
import { profileUser, profileSuccess, profileFailure } from "./profileRedux";

import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("api/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, register) => {
    dispatch(registerUser());
    try {
        const res = await axios.post("/api/auth/register", register)
        dispatch(registerSuccess(res.data))
    } catch (err) {
        dispatch(registerFailure())
    }
}

//CREATE PROFILE
export const profile = async (dispatch, profile) => {
    dispatch(profileUser());
    try {
        const res = await axios.post("/api/profile/fisherman", profile)
        dispatch(profileSuccess(res.data))
    } catch (err) {
        dispatch(profileFailure())
    }
} 
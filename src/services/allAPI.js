import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api :called from aunth component when register btn clicked
export const registerAPI= async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,userData)
}

//login api : called by Auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google login api
export const googleLoginAPI=async (userData)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userData)
}
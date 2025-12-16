import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api :called from aunth component when register btn clicked
export const registerAPI= async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login api : called by Auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
   return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google login api
export const googleLoginAPI=async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

///user/book/add - addbook api : called by SellBook Compoenent when add book btn click

export const addBookAPI = async (reqBody,reqHeader)=>{
   return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api :called from aunth component when register btn clicked
export const registerAPI= async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,userData)
}
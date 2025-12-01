const commonAPI = async(httpMethod,url,reqBody,reqHead)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHead ? reqHead : {"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>res).catch(err=>err)

}
export default commonAPI
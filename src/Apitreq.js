
const apireqest= async (url="",optionobj=null,errmessage=null)=>{

    try{
        const response = await fetch(url,optionobj,);
        if (!response.ok){
          throw Error("please reload the app")
        }

    }catch(err){
        errmessage=err.message;

    }
    finally{
        return errmessage
    }
}

export default apireqest;
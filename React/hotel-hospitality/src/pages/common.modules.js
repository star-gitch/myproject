
const checkLogin=(history)=>{
   
    if(!localStorage.getItem('auth_token'))
    {   
       
         history.push("/signIn");
    
    }
}

module.exports={
    checkLogin
}


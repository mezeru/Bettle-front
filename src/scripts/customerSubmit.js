import axios from "axios";

export default async function(name,pass){

    try{ 
      const resp = await axios.post('http://localhost:3000/users/customer',
     {
        "name":name,
        "password":pass
      }   
    );
    return resp;
  
  }
  catch(e){
    return e;
  }
  
  
  }
  
import axios from "axios";

export default async function(pincode,contact){

    try{ 
      const resp = await axios.put('https://bettle-backend.herokuapp.com/customer',
     {
        "pincode":pincode,
        "contact":contact
      }
    );

    return resp;
  
  }
  catch(e){
    return e;
  }
  
  
  }
  
import axios from "axios";

export default async function(pincode,contact){

    try{ 
      const resp = await axios.put('http://localhost:3000/customer',
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
  
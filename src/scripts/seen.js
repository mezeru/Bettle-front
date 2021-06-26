const axios = require('axios');
import 'regenerator-runtime/runtime';

export default async function(id ,name){

    try{

      const resp = await axios.post('https://bettle-backend.herokuapp.com/users/seen',
      {
        name:name,
        id:id
      }   
    );

    
  
  }
  catch(e){
    return e;
  }
  
  
  }

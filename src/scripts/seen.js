const axios = require('axios');
import 'regenerator-runtime/runtime';

export default async function(id ,name){

    try{

        console.log(id,name);

      const resp = await axios.post('http://localhost:3000/users/seen',
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

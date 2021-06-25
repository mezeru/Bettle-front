import axios from 'axios';
import 'regenerator-runtime/runtime';

export default async function(name,pass){

  try{ 
    const resp = await axios.post('https://bettle-backend.herokuapp.com/users/login',
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


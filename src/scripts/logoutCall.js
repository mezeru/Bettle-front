import axios from 'axios';
import 'regenerator-runtime/runtime';

export default async function(token){

  try{ 
    const resp = await axios.delete('https://bettle-backend.herokuapp.com/users/logout',
    {
      "token":token
    }   
  );
  return resp;

}
catch(e){
  return e;
}


}
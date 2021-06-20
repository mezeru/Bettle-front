import axios from 'axios';
import 'regenerator-runtime/runtime';

export default async function(token){

  try{ 
    const resp = await axios.delete('http://localhost:3000/users/logout',
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
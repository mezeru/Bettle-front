import axios from 'axios';
import 'regenerator-runtime/runtime';

export default async function(name,pass){

   const resp = await axios.get('http://localhost:3000/users/login',{
    params:{
      "name":name,
      "password":pass
    }
  }).then(res => res).catch(e => {console.log(e)});

}


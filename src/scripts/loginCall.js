import axios from 'axios';

const api = axios.create({
  baseURL:"http://localhost:3000/users/login"
});

export default function(name,pass){

  api.get('/',{
    params:{
      name:name,
      pass:pass
    }
  }).then(res => res).catch(e => {console.log(e)});

}


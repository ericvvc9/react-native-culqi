import Config from './Config';
import 'axios';
export default class Culqi {
  constructor() {
    super();
  }
  
  static createToken = (card = { 
    card_number:'',
    cvv:'',
    expiration_month:'',
    expiration_year:'',
    email:'',
  },token)  => {
    return axios('', {
      method:'POST',
      url:Config.url_base_secure+"/tokens/",
      data:card,
      headers : {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': "Bearer " + token
      }
    }).then((body) => {
      return  body.data
    })

  }

}
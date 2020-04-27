import axios from 'axios';
const Config = {
  url_base: "https://api.culqi.com/v2",
  url_base_secure: "https://secure.culqi.com/v2",
}
class Culqi {

  static _Listeners = {
    count: 0,
    refs: {},
  }

  
  static createToken = (card = { 
    card_number:'',
    cvv:'',
    expiration_month:'',
    expiration_year:'',
    email:'',
  },token)  => {
    return axios.request({
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

export { Culqi }

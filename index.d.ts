declare module 'react-native-event-listeners' {
  
  class Culqi {
    public static createToken(card : { 
      card_number:string,
      cvv:string,
      expiration_month:string,
      expiration_year:string,
      email:string,
    },token:string): Promise
  }

  export { Culqi };
}

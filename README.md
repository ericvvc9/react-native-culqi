# react-native-culqi

## Getting started

`$ npm install https://github.com/ericvvc9/react-native-culqi --save`

## Usage
```javascript
import {Culqi} from 'react-native-culqi'

let TOKEN_API ="xxxxx..."
Culqi.createToken({
  card_number:'',
  cvv:'',
  expiration_month:'',
  expiration_year:'',
  email:'',
}, TOKEN_API)

```

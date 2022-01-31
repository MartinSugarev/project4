import Trending from '../src/components/trending/Trending'

const obj = {
  "cards":[
     {
        "name":"Ivy",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":1,
        "currency":"ETH"
     },
     {
        "name":"Judie",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":2.3,
        "currency":"ETH"
     },
     {
        "name":"Juniper",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":5,
        "currency":"ETH"
     },
     {
        "name":"Maple",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":10,
        "currency":"ETH",
        "timeLeft": 5000
     }
  ]
}

export default function Index() {
  return  <Trending  />
  

}

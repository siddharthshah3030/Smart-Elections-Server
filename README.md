# Smart Elections 

#### for running blockChain codes make sure to uncomment the calls
 - data/main.js
#### seed Block chain parties with identity
 - data/seedBlockchain/partyBlockchain.js
 - this is the file
 - just add your function there
#### seed Block chain campaigns with identity
 - data/seedBlockchain/partyBlockchain.js
 - this is the file
 - just add your function there
### sample party
```sh

{ _id: 5c3e617f99e0d8302d46652d,
  name: 'Shiv Sena',
  abb: 'SS',
  identity:
   'lKaxc5so2G3hNpTEFnDYIDtXb8OIdS7zVnQWbpLQgh1mTxfzVyIKIesUqnFajZpa5QevLFCRfSrSqckqB5fwHfjXdp1XAxygCu1XflTMIBYWMQvHqryPPzStzFhQpUPXq6AAakbSXts1mZznvipRSRdscV4woAP2lYUoARqUHR9QJpECyfGaPZymejBrpIC1D8Z8Y1CEYHce9dLOpeZ8oJFueB3zcqej5zmuK1y877ATmg6WEOBH55Q7KqKCLDqD',
  __v: 0 }
```

### sample campaign
```sh
{
    "_id": "5c3e74d079644b4bf7144c6b",
    "name": "location100",
    "locationName": "Varman Glen",
    "chairPName": "Shwet Khanna",
    "ChairPIdentity": "i4WNVSvpaR8SgSHtRrsFJwysKqk5bUtriQ581vGbYJGdyYZvTAAbApBSCHDMfnpXj7SIWxcFvJzc0RhliOaxC4lVtDZENdCEo08PHOCxjtfdcUgUdxu0oZevz0tBdHpLeLJEJfSpZ61wOMgNmUwtFTz2B1lDVi4F5bmXblR3WGbjRR8meaqzldDlosCtMYMX7GRxtpZ4Dd7duGPKz7OwT8dO0kPJI4bioRwtwDK45GbXKAVY1Ysd5tIYbfz8Hon9",
    "candidates": [
        {
            "party": {
                "name": "Bharatiya Janata Party",
                "abb": "BJP",
                "symbol": "url0"
            },
            "_id": "5c3e74d079644b4bf7144c6c",
            "name": "Shreyashi Iyengar DVM"
        },
        {
            "party": {
                "name": "Samajwadi Party",
                "abb": "SP",
                "symbol": "url9"
            },
            "_id": "5c3e74d079644b4bf7144c6d",
            "name": "Rita Gill III"
        },
        {
            "party": {
                "name": "Bahujan Samaj Party",
                "abb": "BSP",
                "symbol": "url2"
            },
            "_id": "5c3e74d079644b4bf7144c6e",
            "name": "Bala Mehrotra"
        },
        {
            "party": {
                "name": "Nationalist Congress Party",
                "abb": "NCP",
                "symbol": "url5"
            },
            "_id": "5c3e74d079644b4bf7144c6f",
            "name": "Chakradhar Ganaka"
        },
        {
            "party": {
                "name": "Aam Aadmi Party",
                "abb": "AAP",
                "symbol": "url6"
            },
            "_id": "5c3e74d079644b4bf7144c70",
            "name": "Tejas Pillai"
        }
    ],
    "__v": 0
}

```



#### api get request 
- https://smartelectionsapi.herokuapp.com/region/location1
- https://smartelectionsapi.herokuapp.com/region/location2
- https://smartelectionsapi.herokuapp.com/region/location3
 - to
 - https://smartelectionsapi.herokuapp.com/region/location100



#### output description : OLD
- you provide location name 
(abb = abbreviation)
api gives   :{
    name:    String,
    candidates : [ {name : String, party : { name : String ,abb: String, symbol : StringUrl}} ]
    }
    """
#### json : OLD
{"_id":"5c3bed20df1807305db59183","name":"location55","candidates":[{"party":{"name":"All India Trinamool Congress","abb":"AITC","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59184","name":"candidate_271"},{"party":{"name":"Bahujan Samaj Party","abb":"BSP","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59185","name":"candidate_272"},{"party":{"name":"Communist Party of India","abb":"CPI","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59186","name":"candidate_273"},{"party":{"name":"Indian National Congress","abb":"INC","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59187","name":"candidate_274"}],"__v":0}

#### json for user :
{ _id: 5c3c81ebbe13e3132afdac14,
  region: 'location99',
  name: 'Bhima Iyengar',
  title: 'III',
  email: 'Kailash.Gandhi16@yahoo.co.in',
  password: 'noCOv2bzEIcMWkq',
  image: 'http://lorempixel.com/640/480',
  zipcode: 'X0M 1H6',
  city: 'Niranjanmouth',
  state: 'Madya Pradesh',
  streetaddress: '9854 Chandira Villages',
  voted: false,
  votedTo: null,
  identity:
   'SLWBNtVTCloRPPA7E6YzSBot5Y5wGVtjHTCteK283XGi96WOiMXDkEsahqkaANcouCxdY4RCYCzn1rl1FPS4se3RlmjwOFjdKLLLR6MDjDkPE5hvU8EzQ1zv4ZXoQBmEt7nJX1XFb4azzqs5aM6mPccuNH0XccbL8x4w4LZCBPlpCfTcsMShZKi72WTZL7tvLlq3OREqwoO7eWFksHWhwcaGxKaE8NjPFn0zTZSfvk1Miz8sQDRn73LK3zprpZtx' }

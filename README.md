# Smart Elections

### Smart Elections Based on Decentralised Ethereum Blockchain Network. An attempt to improve India's current election system using Ethereum Blockchain Network.

### Etherum Smart Contracts Repository [here](https://github.com/Shritesh99/Smart-Elections_Solidity)

### Voting Machine Repository [here](https://github.com/utkarshchandrakar/smart-elections)

### This Repository consist of etherum side smart contract code for Smart Elections.

<p align="center">
  <img src="https://github.com/Shritesh99/Smart-Elections_Solidity/blob/master/imgs/Canvas%205.jpg" />
</p>

## Workflow -
![process image here](public/process001.png?raw=true "process of voting")

#### @shritesh99 
 - a transaction to get results stored in block chain will give me what attributes and values
 - expecting 
```sh
100 campaigns with their identity 
each campaign has 100 voters approx

so 100 votes with their party ID
 OR
  PartyID with their total votes in that campaign

also,the number of people who have not voted which will be there

```

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
   '0Jz8yt58G5LK7gHcn8o1T5HBXBEvXX9yeFlBaRBkDbzopcRXiIqeXgc49hA2x6XAwk6PgyXmHvRo5ICYHxqaiqQfwXrwrWvlGjvV4S3YWhzy9soqUbg0iQPIjsbsptP07JTNUyCniXTdO8kDk3hTxHhDNx6pbvm0pbyxsdkEGh6qkxNkSdUPgriFy6hd1SblOBqOcRx4flhR7IMurkKrGf3Yl0AN8qp206SCPuVcAIOAc0iVREWz3ZeziQMI6tu9',
  __v: 0 }
```

### sample campaign
```sh
{
    "_id": {
        "$oid": "5c3fc585278736677c74d441"
    },
    "name": "location1",
    "locationName": "Agarwal Canyon",
    "chairPName": "Agnimitra Varman",
    "ChairPAdd": "5f47116d6e50a73d3406a9c4ab6824737e444de2",
    "candidates": [
        {
            "_id": {
                "$oid": "5c3fc585278736677c74d442"
            },
            "name": "Bankim Nambeesan Jr.",
            "party": {
                "name": "Samajwadi Party",
                "abb": "SP",
                "symbol": "url9",
                "partyId": "rNRnPfv7DuswtUEfT6ULXPWEV0r59J66AsIMSLAC8jOTHZg1yrlSunNItC7WQsM59yjKIaQKq6F2eqb9m0eSWw243QUjtYxXgJTAMWGPlUfKNjKOPNcDCcfU4qvx4m72UNOdkkoNxfSAX0M24Ehn8yxTVaAOnFFzMDVNI1cgMPJKGevrOQDmGWVJYAuimqcThCCYKkFOGz0tDvnjz2bQKRGI649s3zWUnlYXQgY5W4S9BUTlR4snftpUNTQpR4Pg"
            }
        },
        {
            "_id": {
                "$oid": "5c3fc585278736677c74d443"
            },
            "name": "Bilva Pilla",
            "party": {
                "name": "Aam Aadmi Party",
                "abb": "AAP",
                "symbol": "url6",
                "partyId": "G0GcG9GqWxcQ2FBfwd2YHEDyYJ3uIjFf5OFbCH2luwJ5OaT1mkPt05qUWQN1XjanF7q4O0gpU0cSBcSaTuuXWM1PImCwT3OzYxqpPTjZ6GiLP5o8jI25z7joHvySSpmXVMas9hQpZStJ3RuucaUEcpjs1BIYPZWJk0Pm6uHhbV4vIhZIHXyn1WIAKGhQZbQKmtCD2V059zH37ZAbiyPSyRsXdVZlJElf2g1mkXhW79cluYI7c24EtevAIHTswFcA"
            }
        },
        {
            "_id": {
                "$oid": "5c3fc585278736677c74d444"
            },
            "name": "Devagya Kakkar",
            "party": {
                "name": "Communist Party of India",
                "abb": "CPI",
                "symbol": "url3",
                "partyId": "EjkUsnRIHNAgOnvllc9nwL44O8BfHvVtfqpGnoZAHfqJXrtcXy1uY0R27YWJ0Hu5DZ6X00ow1MYnR13cfYBI9OnR8b4HnuCPPT8FGfJaY7zWZp2f8uagBLjfB0K8u9KD4Yq22fkSZcVrDycd1T8sw0yMDfQlCNTWnAqIVuhubUUTccCE8SmVzzo75SMwM7EtWBLKbLhje54cGhe247kykpQxhzonM4u10NAfcomLBLu3s4lAVPhFtUkm62k4Hqrp"
            }
        },
        {
            "_id": {
                "$oid": "5c3fc585278736677c74d445"
            },
            "name": "Anand Swarup Sinha",
            "party": {
                "name": "Bharatiya Janata Party",
                "abb": "BJP",
                "symbol": "url0",
                "partyId": "F7JoWf6gro5PXhfSlkrBwkjo57CihkxiYoVN0Q0vzvW2OUPUY93GspIWqY6p8H4owW9e4GDB3Di4JJzyuy8USLcONmLYxQEsrJZVUxByvQQkbW8SralXlDAXzaOoMlxVV9NFlYJGsiKczLg1txk7JbHYejZd8vXhbl7WzKiEIR0UqxiWFvWivsze2IShJ2A4w80HaOcv367XYuuNNVTn6LShZlYLkQQ5Tty7iBal1g6eCWQOIpHeAZnFlt64l4B4"
            }
        },
        {
            "_id": {
                "$oid": "5c3fc585278736677c74d446"
            },
            "name": "Adwitiya Devar",
            "party": {
                "name": "Nationalist Congress Party",
                "abb": "NCP",
                "symbol": "url5",
                "partyId": "ypnTZJwusiws0Hlaa1S9dJEbyrW55UrO0JikBbQpdFp3uTfJy1gmnJDjKtH2zaFaBqmvYlSApUC0Z1xI8q37OdybeIHrvJ0tMYP3RRNiIQ1v8WznpPSbBmPoezJOyfw5Q9PPLz4keUbrGhnX53shfRLT14HUX9VUj0BzICiYYSb9GvpT4AJH9yWqwf4UbI1r7KEs0lCUf3aMUhBpxS7Tjk82sCsyuCyjGLoGuK4sKRepQjaeQtebYxc6qN4OSjxO"
            }
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

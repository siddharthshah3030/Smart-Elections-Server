# Smart Elections 

#### api get request 
- localhost:5000/region/location1
- localhost:5000/region/location2
- localhost:5000/region/location3
- to 
- localhost:5000/region/location100

#### output description : 
- you provide location name 
(abb = abbreviation)
api gives   :{
    name:    String,
    candidates : [ {name : String, party : { name : String ,abb: String, symbol : StringUrl}} ]
    }
    """
#### json : 
{"_id":"5c3bed20df1807305db59183","name":"location55","candidates":[{"party":{"name":"All India Trinamool Congress","abb":"AITC","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59184","name":"candidate_271"},{"party":{"name":"Bahujan Samaj Party","abb":"BSP","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59185","name":"candidate_272"},{"party":{"name":"Communist Party of India","abb":"CPI","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59186","name":"candidate_273"},{"party":{"name":"Indian National Congress","abb":"INC","symbol":"stringUrl"},"_id":"5c3bed20df1807305db59187","name":"candidate_274"}],"__v":0}
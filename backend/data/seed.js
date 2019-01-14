for(i=0;i<101;i++){
    
    var location = new region( {   name:    "String",
        candidates : [ {name : "String", party : { name : "String" , abb:"strin", symbol : "String"}} ]});
    location.save(function (err) {
      if (err) return handleError(err);
      // saved!
    });



}




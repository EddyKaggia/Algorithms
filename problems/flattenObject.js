let test = {
    "Key1" : "1",
    "Key2" : {
              "a" : "2",
              "b" : "3",
              "c" : {
                      "d" : {"x":{"y": "10"}},
                      "e" : "1"
                     }
               }
         }


//Write a function that yields:

 // {'Key1': '1', 
 //  'Key2.a': '2', 
 //  'Key2.b': '3', 
 //  'Key2.c.d.x.y': '10',   
 //  'Key2.c.e': '1' }


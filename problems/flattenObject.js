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

//  {'Key1': '1', 
//   'Key2.a': '2', 
//   'Key2.b': '3', 
//   'Key2.c.d.x.y': '10',   
//   'Key2.c.e': '1' }

const flattenObject = (obj, prefix = '') => {
      let result = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const nestedKeys = flattenObject(obj[key], prefix + key + '.');
      result = { ...result, ...nestedKeys };
    } else {
      result[prefix + key] = obj[key];
    }
  }

  return result;
}

console.log(flattenObject(test)); 
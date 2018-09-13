/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
 const isObject = data => {
   arrOfData = ["number","object","string","array"];
   for(let i=0;i<arrOfData.length;i++){
     if(typeof(data)===arrOfData[i]){
       return true;
     }
     else{
       return false;
     }
   }
 };

export default isObject;

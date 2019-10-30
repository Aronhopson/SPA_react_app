export const sortedArray = (str1, str2) => {
    let sortedString = '';
    let strLength1 = str1.length;
    let strLength2 = str2.length;
    let totalLength = strLength1 + strLength2;
    let i = 0;
    let j = 0;
    while(i+j < totalLength){
        if(i < strLength1 && j<= strLength2){
         if(str1[i] < str2[j]){
             sortedString += str1[i];
             i++;
         }else{
             sortedString += str2[j];
             j++;
         }
        }else if(i === strLength1){
         sortedString += str2[j];
             j++;
        }else if(j === strLength2){
         sortedString += str1[i];
             i++;
        }
    }
    // console.log(sortedString)
    return sortedString;
 
 }
 
//  let Sorted = sortedArray(['b', 'c', 'f', 'g'], ['a', 'd', 'e', 'h', 'i']);
//  console.log(Sorted)
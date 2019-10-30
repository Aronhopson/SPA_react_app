export const Compress = (str)=> {
     let compString = '';
     for (let i=0; i<str.length; i++){
         let currentLetter = str[i];
         var curCount = 1;
         while(str[i+1] === currentLetter){
             curCount ++;
             i++;
         }
         compString += currentLetter +curCount;
        
     }
     if(compString.length> str.length){
        return str;
     }
     return compString;
}






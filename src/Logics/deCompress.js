export const deCompress = (str) => {
    let charArray = [];
    let countArray = [];
    let deCompressedString = '';
    for(let i=0 ; i<str.length; i++){
        if((str[i] >= "A" && str[i] <= "Z" )|| (str[i] >= "a" && str[i] <= 'z'))
        charArray.push(str[i]);
        else{
            if((str[i-1] >= "A" && str[i-1] <= "Z" )|| (str[i-1] >= "a" && str[i-1] <= 'z')){
                countArray.push(parseInt(str[i]));
            }else {
                let num = countArray.pop();
                countArray.push(num*10 + parseInt(str[i]));
            }
        } 
            
    }
    for(let i=0;i<charArray.length;i++){
        for(let j=0;j<countArray[i]; j++){
            deCompressedString += charArray[i];
        }
    }
    return deCompressedString;
}



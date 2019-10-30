export const IncreaseDecrease = (str) => {
    let newStr = '';
    for(var i=0; i < str.length ;i++){
        if(str[i] === 'A' && i+1 < str.length){
            let num = parseInt(str[i+1]) + 1;
            if(num === 10) num = 0;
            str = str.substr(0, i+1) + num + str.substr(i + 2);
        }
        else if(str[i] === 'B' && i+1 < str.length){
            let num = parseInt(str[i+1]) -1 ;
            if(num === -1) num = 9;
            str = str.substr(0, i+1) + num + str.substr(i + 2);
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}
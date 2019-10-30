
 export const checkBalanced = (str) => {
    let bracketStack = [];
    let topElement;
    for(let i=0; i<str.length; i++){
        switch(str[i]){
            case '[':
            case '{':
            case '(': bracketStack.push(str[i]); break;
            case ']': topElement = bracketStack.slice(-1)[0];
                if(topElement === '[')
                    bracketStack.pop();
                else
                    bracketStack.push(']');
                break;
            case ')': topElement = bracketStack.slice(-1)[0];
                    if(topElement === '(')
                        bracketStack.pop();
                    else
                    bracketStack.push(')');
                        break;
            case '}': topElement = bracketStack.slice(-1)[0];
                if(topElement === '{')
                    bracketStack.pop();
                else
                bracketStack.push('}');
                    break;

            default: break;
        }
    }
    if(bracketStack.length === 0)
        return 'Balanced';
    else
        return "Not Balanced";
}
// console.log(checkBalanced('[()][()()]()[{()}]'));
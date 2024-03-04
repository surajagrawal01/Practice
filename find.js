const unique = (str)=>{
    let uniii =''
    for(const char of str){
        if(!un.includes(char)){
            uniii+= char
        }
    }
    
    return uniii
}

console.log(unique('aaabbcc'))
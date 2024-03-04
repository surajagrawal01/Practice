const unique = (str)=>{
    let un =''
    for(const char of str){
        if(!un.includes(char)){
            un+= char
        }
    }
    return un
}

console.log(unique('aaabbcc'))
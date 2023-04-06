console.log("Hello word")
let i=0;
setInterval(()=>{
    console.log(i);
    i++;
    if(i===5){
        console.log('Forced error');
        const a = 2+z;
    }
},1000)

console.log('Second instruction')
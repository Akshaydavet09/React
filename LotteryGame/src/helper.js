const genTicket = function(n){
    let arr = new Array(n);
for(let i=0; i<arr.length; i++){
    arr[i] = Math.floor(Math.random()*10);
}
console.log(arr);
return arr;
}

const calSum = function(array){
    let addition = 0;
    array.map((num)=>{
        addition += num;
    });
    return addition;
} 


export {genTicket, calSum}; 
function LotteryHeading({val}){
let addition = 0;
console.log(val)
for(let i =0; i<val.length; i++){
    addition+=Number(val[i]);
}
console.log(addition);
    return <>
    {addition==15? <h2>Lottery "Congratulation you won!"</h2>:<h2>Lottery</h2>}
    </>
}
export default LotteryHeading;
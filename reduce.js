const numbers = [30, 44, 35, 70];

numbers.map(num => num*2);
numbers.filter(num => num > 20);
numbers.find(num => num > 20);
const total = numbers.reduce((sum, num) => sum + num ,0)
// numbers.reduce((initialVariable, paramiter) => sum + num , initialValue);
console.log(total);

const friends = [
    {name:"Anik", money: 30},
    {name:"Siam", money: 44},
    {name:"Najmul", money: 35},
    {name:"Suza", money: 70}
]

const totalBalance = friends.reduce((totalMoney, friend) => {
    return totalMoney + friend.money;
}, 0);

console.log(totalBalance);
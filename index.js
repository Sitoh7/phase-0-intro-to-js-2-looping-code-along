// Code your solutions in this file


function writeCards(names,eventName) {
    
    const newArray = [];
    for(let i = 0; i < names.length; i++ )  {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    
      
    }

return newArray
}

function countDown(num) {
    let i = num;
    while(i>-1){
       console.log(i);
       
    i--;
      
    }
    return i
}




  
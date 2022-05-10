function sevenRandomNumbers(){
    var arr = [];
    while(arr.length < 7){
        var r = Math.floor(Math.random() * 9) + 1;
        if(arr.indexOf(r) === -1) arr.push(r); 
    }
    console.log(arr);
  }
  console.log(sevenRandomNumbers())
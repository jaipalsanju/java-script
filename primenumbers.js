function prime(number){
    var count=0
  for(var i=2;i<number;i++){
    if(number%i==0){
      count=count+1
      break;
    }
    else {
      count=0
    }
  }
  if (count==1){
    console.log("not prime")
  }
  else{
    console.log("prime")
  
  }
  }
  prime(117)
  prime(11)
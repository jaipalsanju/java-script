function arrayprimes(array){
    count=0
    i=0;
    while(i<array.length){
        for(let j=2;j<array[i];j++){
            if(array[i]%j==0){
                count=count+1
                break
            }
       }
        if(count==0){
            console.log("prime"+ array[i])
        }
        i++
        count =0
      }
}
arrayprimes([2,4,5,8,9,67,54,23,12])
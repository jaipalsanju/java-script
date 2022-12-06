let student={
    name:'sanju',
    age:'20',
    gender:'male',
    address:'hindupur',
    nationality:'Indian',
    arr:[3,5,46,56,32,13,17,82,27],
    array:function(){
    sum=0
  console.log("The even number in an array is :")
  for(let x in student.arr){
      sum=sum+student.arr[x]
  
  if(student.arr[x]%2==0){
        console.log(student.arr[x])
      }
  }
  
  console.log("sum of all the elements in an array is :"+sum)
  var count=0
  console.log("The prime numbers in the given array is :")
  for(let i in student.arr){
      for(let j=2;j<student.arr[i];j++){
          if(student.arr[i]%j==0){
              count = count+1
              break;
          }
      }
      if(count==0){
          console.log(student.arr[i])
      }
      count=0
          }
      }
  }
  var len = student.arr.length;
  console.log("The length of the array is :"+len)
  student.array()
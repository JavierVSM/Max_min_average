function test(arr) {
    let min= arr[0];
    let max= arr[0];
    let avg= arr[0];
    for (let i=0; i <arr.length; i++) {
      if (min>arr[i]){
        min=arr[i];
      }
      if (max<arr[i]){
        max=arr[i];
      }
      avg=avg+arr[i];  
    }
    avg=avg/arr.length;  
    return "The minimum is " + min + ", the maximum is "+ max + ", and the average is "+avg;
  }
  
  
  let ArrayOne = [4,6,8,7,32,74,97];
  test(ArrayOne);
function sum_2Darr(arr) {
  // hiển thị các phần từ của mảng
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j =0; j < arr[i].length; j++) {

      sum += arr[i][j];

  }
   
  } 
  
  return sum;

}
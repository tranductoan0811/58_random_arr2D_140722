function min_2Darr(arr) {
  // hiển thị các phần từ của mảng
  var min_value = arr[0][0];
  let row_index = 0;
  let col_index = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
       
      if (arr[i][j] < min_value) {
         
        min_value = arr[i][j];
        row_index = i;
        col_index = j;

       }
  }
   
  } 
  
  return [min_value, row_index, col_index];

}
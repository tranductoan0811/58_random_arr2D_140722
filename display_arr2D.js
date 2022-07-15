function display_2Darr(arr) {
  // hiển thị các phần từ của mảng
  for (let i = 0; i < arr.length; i++) {
    for (let j =0; j < arr[i].length; j++) {

      document.write(arr[i][j] + " ");

  }
  document.write("<br>");
  }


}
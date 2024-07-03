function swap(str) {
    var swapped = '';
    var leng=str.length;
    for (var i=0; i<leng; i++) {
        if (str[i].toLowerCase() == str[i]) {
           swapped =swapped+ str[i].toUpperCase();
        } else {
           swapped =swapped+ str[i].toLowerCase();
        }
    }
    return swapped;
  }
  console.log(swap(window.prompt()))
function superbowlWin(Array) {
  const win = Array.find((object) => object.result === "W");
  return win ? win.year : undefined;
}
/* this function takes an array of objects as an argument. uses the find() 
method to iterate over the individual objects in the array and returns the 
first elemnt/object whose result property is "W". game    */

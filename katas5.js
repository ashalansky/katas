const urlEncode = function(text) {
  let space = " ";
  let string = "";
  let encoded = "%20";
  let newString = text.trim();
    

  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === space) {
      string += encoded;
    }
    else {
      string += newString[i];
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

let printSegitiga = 5;
let string = "";
for (let i = 1; i <= printSegitiga; i++) {
  for (let k = 1; k <= printSegitiga - i + 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);



// "\n" ini untuk mengganti baris atau new line
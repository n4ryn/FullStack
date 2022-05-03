let a = { name: "A"};
console.log(a);

let b = JSON.stringify(a);
console.log(b);

let c = JSON.parse(b);
console.log(c.name);
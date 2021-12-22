var scale = d3.scale
    .linear() //or log or pow
    .domain([130, 350])
    .range([10, 100])

console.log(scale(300));
console.log(scale(270));
console.log(scale(150));

d3.select("body").append("H1")
    .text("Scaling Example");
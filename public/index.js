import c3 from "c3";
console.log("Hi");
import "c3/c3.min.css";
var chart = c3.generate({
  bindto: "#chart",
  data: {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25],
    ],
  },
});

import c3 from "c3";
import "bootstrap/dist/css/bootstrap.min.css";

import "c3/c3.min.css";
window.loadChart = (obj) => {
  const parsed = JSON.parse(obj);
  console.log(parsed);
  const data = parsed.data;
  const dataTotal = parsed.dataTotal;
  // return;
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      json: data,
      keys: {
        x: "Date",
        value: ["Apples", "Peaches"],
      },
    },
    axis: {
      x: {
        type: "category",
      },
    },
  });
  var chartTwo = c3.generate({
    bindto: "#chartTwo",
    data: {
      json: data,
      keys: {
        x: "Date",
        value: ["Bananas", "Grapes", "Strawberries"],
      },
    },
    axis: {
      x: {
        type: "category",
      },
    },
  });
  var chartThree = c3.generate({
    bindto: "#chartThree",
    data: {
      type: "bar",
      json: dataTotal,
      keys: {
        x: "Date",
        value: ["Total"],
      },
    },
    axis: {
      x: {
        type: "category",
      },
    },
  });
};

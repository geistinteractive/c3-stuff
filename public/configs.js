export const chartOneConfig = {
  legend: {
    show: false,
  },
  data: {
    type: "line",
    json: [],
    colors: { Bananas: "blue", Peaches: "#ea8e00" },
    keys: {
      x: "Date",
      value: ["Bananas", "Peaches"],
    },
  },
  axis: {
    x: {
      type: "category",
    },
  },
};

export const chartTwoConfig = {
  data: {
    json: [],
    colors: { Bananas: "green", Grapes: "#ea8e00", Strawberries: "#ff595e" },
    keys: {
      x: "Date",
    },
  },
  axis: {
    x: {
      type: "category",
    },
  },
};

export const chartThreeConfig = {
  bindto: "#chartThree",
  data: {
    colors: { Total: "#d15abb" },
    type: "bar",
    json: [],
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
};

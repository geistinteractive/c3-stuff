import c3 from "c3";
import "c3/c3.min.css";
import { MDCRipple } from "@material/ripple";
import { chartOneConfig, chartThreeConfig, chartTwoConfig } from "./configs";

window.loadChart = (obj) => {
  const parsed = JSON.parse(obj);
  const data = parsed.data;
  const dataTotal = parsed.dataTotal;

  chartOneConfig.data.json = data;
  chartTwoConfig.data.json = data;
  chartThreeConfig.data.json = dataTotal;

  chartTwoConfig.data.keys.value = ["Bananas", "Grapes", "Strawberries"];
  chartOneConfig.bindto = "#chart";
  chartTwoConfig.bindto = "#chartTwo";
  chartThreeConfig.bindto = "#chartThree";

  var chart = c3.generate(chartOneConfig);
  var chartTwo = c3.generate(chartTwoConfig);
  var chartThree = c3.generate(chartThreeConfig);
};

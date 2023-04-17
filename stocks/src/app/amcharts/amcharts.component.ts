import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5stock from '@amcharts/amcharts5/stock';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.scss']
})
export class AmchartsComponent implements OnInit {
  mainPanel: any;
  stockChart: any;
  valueLegend: any;
  root: any;
  dateAxis: any;
  tooltip: any;
  newSettings: any;
  toolbar: any;
  data: any;

  constructor() {
    this.data = [
     
      { Date: 1619092800000, Open: 513.82, High: 513.96, Low: 500.55, Close: 508.78, Volume: 9061100 },
      { Date: 1619179200000, Open: 509.01, High: 509.7, Low: 500.7, Close: 505.55, Volume: 7307700 },
      { Date: 1619438400000, Open: 506.76, High: 510.48, Low: 503, Close: 510.3, Volume: 4388800 },
      { Date: 1619524800000, Open: 512.62, High: 512.99, Low: 504.58, Close: 505.55, Volume: 3761300 },
      { Date: 1619611200000, Open: 505.2, High: 508.4, Low: 503.34, Close: 506.52, Volume: 3193000 },
      { Date: 1619697600000, Open: 507.6, High: 509.29, Low: 499, Close: 509, Volume: 5127800 },
      { Date: 1619784000000, Open: 505, High: 514.55, Low: 505, Close: 513.47, Volume: 4413200 },
      { Date: 1620043200000, Open: 512.65, High: 518.95, Low: 505.2, Close: 509.11, Volume: 4091900 },
      { Date: 1620129600000, Open: 510.78, High: 511.63, Low: 496.79, Close: 503.18, Volume: 4349500 },
      { Date: 1620216000000, Open: 504.99, High: 507.78, Low: 494.63, Close: 496.08, Volume: 3129400 },
      { Date: 1620302400000, Open: 495.99, High: 499.55, Low: 491.37, Close: 499.55, Volume: 3783700 },
      { Date: 1620388800000, Open: 504.62, High: 508.55, Low: 501.12, Close: 503.84, Volume: 3132800 },
      { Date: 1620648000000, Open: 502, High: 503.15, Low: 486.11, Close: 486.69, Volume: 5131600 },
      { Date: 1620734400000, Open: 479.75, High: 497.99, Low: 478.63, Close: 495.08, Volume: 4401000 },
      { Date: 1620820800000, Open: 486.83, High: 493.54, Low: 482.7, Close: 484.98, Volume: 4121500 },
      { Date: 1620907200000, Open: 489.13, High: 490.78, Low: 482.71, Close: 486.66, Volume: 2712500 },
      { Date: 1620993600000, Open: 487.86, High: 494.85, Low: 486.59, Close: 493.37, Volume: 2882500 },
      { Date: 1621252800000, Open: 485.59, High: 492.71, Low: 482.81, Close: 488.94, Volume: 2705200 },
      { Date: 1621339200000, Open: 488.4, High: 493.48, Low: 486.19, Close: 486.28, Volume: 2350500 },
      { Date: 1621425600000, Open: 481.63, High: 488.57, Low: 478.54, Close: 487.7, Volume: 3349900 },
      { Date: 1621512000000, Open: 489.55, High: 502.7, Low: 488.98, Close: 501.67, Volume: 3721200 },
      { Date: 1621598400000, Open: 503.12, High: 505.4, Low: 497.26, Close: 497.89, Volume: 3322900 },
      { Date: 1621857600000, Open: 501.05, High: 504.25, Low: 499.51, Close: 502.9, Volume: 2412600 },
      { Date: 1621944000000, Open: 506, High: 506.37, Low: 499.22, Close: 501.34, Volume: 2699500 },
      { Date: 1622030400000, Open: 502.34, High: 504.14, Low: 500.5, Close: 502.36, Volume: 2465300 },
      { Date: 1622116800000, Open: 501.8, High: 505.1, Low: 498.54, Close: 503.86, Volume: 3253800 },
      { Date: 1622203200000, Open: 504.4, High: 511.76, Low: 502.53, Close: 502.81, Volume: 2910300 },
      { Date: 1622548800000, Open: 504.01, High: 505.41, Low: 497.74, Close: 499.08, Volume: 2482600 },
      { Date: 1622635200000, Open: 499.82, High: 503.22, Low: 495.82, Close: 499.24, Volume: 2269000 },
      { Date: 1622721600000, Open: 495.19, High: 496.66, Low: 487.25, Close: 489.43, Volume: 3887400 },
      { Date: 1622808000000, Open: 492, High: 501.86, Low: 490.95, Close: 494.74, Volume: 3160500 },
      { Date: 1623067200000, Open: 492.92, High: 496.7, Low: 490.55, Close: 494.66, Volume: 2791900 },
      { Date: 1623153600000, Open: 497, High: 498.82, Low: 489.37, Close: 492.39, Volume: 2374000 },
      { Date: 1623240000000, Open: 494.5, High: 496.09, Low: 484.65, Close: 485.81, Volume: 3055000 },
      { Date: 1623326400000, Open: 487.17, High: 490.21, Low: 482.14, Close: 487.27, Volume: 4382900 },
      { Date: 1623412800000, Open: 490, High: 491.41, Low: 487.78, Close: 488.77, Volume: 3124000 },
      { Date: 1623672000000, Open: 489.68, High: 503.5, Low: 486.91, Close: 499.89, Volume: 4400200 },
      { Date: 1623758400000, Open: 501.23, High: 501.23, Low: 490.4, Close: 491.9, Volume: 3104100 },
      { Date: 1623844800000, Open: 495, High: 496.46, Low: 486.28, Close: 492.41, Volume: 3533200 },
      { Date: 1623931200000, Open: 490.25, High: 501.8, Low: 490.15, Close: 498.34, Volume: 3198300 },
      { Date: 1624017600000, Open: 496.4, High: 504.49, Low: 495.24, Close: 500.77, Volume: 5197600 },
      { Date: 1624276800000, Open: 501.64, High: 502.05, Low: 492.28, Close: 497, Volume: 5277300 },
      { Date: 1624363200000, Open: 498.54, High: 513.55, Low: 495.8, Close: 508.82, Volume: 5809300 },
      { Date: 1624449600000, Open: 508.48, High: 516.63, Low: 508.2, Close: 512.74, Volume: 3944800 },
      { Date: 1624536000000, Open: 517.96, High: 520.96, Low: 514.4, Close: 518.06, Volume: 3361200 },
      { Date: 1624622400000, Open: 528.84, High: 533.06, Low: 525, Close: 527.07, Volume: 5299100 },
      { Date: 1624881600000, Open: 528.12, High: 533.94, Low: 524.56, Close: 533.03, Volume: 2820200 },
      { Date: 1624968000000, Open: 533.55, High: 536.13, Low: 528.57, Close: 533.5, Volume: 2314600 },
      { Date: 1625054400000, Open: 534.06, High: 534.38, Low: 526.82, Close: 528.21, Volume: 2773400 },
      { Date: 1625140800000, Open: 525.72, High: 537.04, Low: 525.72, Close: 533.54, Volume: 2805400 },
      { Date: 1625227200000, Open: 535.5, High: 538.54, Low: 529.39, Close: 533.98, Volume: 1975500 },
      { Date: 1625572800000, Open: 533, High: 542.86, Low: 533, Close: 541.64, Volume: 2775100 },
      { Date: 1625659200000, Open: 544.24, High: 544.64, Low: 531.66, Close: 535.96, Volume: 2722500 },
      { Date: 1625745600000, Open: 530.93, High: 535.5, Low: 529.09, Close: 530.76, Volume: 3269000 },
      { Date: 1625832000000, Open: 531, High: 538.26, Low: 528.58, Close: 535.98, Volume: 2777200 },
      { Date: 1626091200000, Open: 540.3, High: 540.65, Low: 532.92, Close: 537.31, Volume: 1780700 },
      { Date: 1626177600000, Open: 535.76, High: 545.33, Low: 535.76, Close: 540.68, Volume: 2751600 },
      { Date: 1626264000000, Open: 541.01, High: 554.1, Low: 541.01, Close: 547.95, Volume: 4659500 },
      { Date: 1626350400000, Open: 553.97, High: 557.54, Low: 538.2, Close: 542.95, Volume: 5713900 },
      { Date: 1626436800000, Open: 541.81, High: 544.06, Low: 527.05, Close: 530.31, Volume: 3442100 },
      { Date: 1626696000000, Open: 526.05, High: 534.91, Low: 522.24, Close: 532.28, Volume: 3885800 },
      { Date: 1626782400000, Open: 526.07, High: 536.64, Low: 520.3, Close: 531.05, Volume: 6930400 },
      { Date: 1626868800000, Open: 526.13, High: 530.99, Low: 505.61, Close: 513.63, Volume: 11906800 },
      { Date: 1626955200000, Open: 510.21, High: 513.68, Low: 507, Close: 511.77, Volume: 4328100 },
      { Date: 1627041600000, Open: 512.16, High: 517.41, Low: 504.66, Close: 515.41, Volume: 3820500 },
      { Date: 1627300800000, Open: 514.38, High: 521.13, Low: 509.01, Close: 516.49, Volume: 2254500 },
      { Date: 1627387200000, Open: 518.08, High: 521.95, Low: 512.05, Close: 518.91, Volume: 2759000 },
      { Date: 1627473600000, Open: 521.82, High: 524.47, Low: 516.98, Close: 519.3, Volume: 2390500 },
      { Date: 1627560000000, Open: 519.96, High: 520.78, Low: 513.79, Close: 514.25, Volume: 1736000 },
      { Date: 1627646400000, Open: 512.69, High: 519.79, Low: 510.96, Close: 517.57, Volume: 2537100 },
      { Date: 1627905600000, Open: 519, High: 519.85, Low: 510.51, Close: 515.15, Volume: 2096600 },
      { Date: 1627992000000, Open: 514.39, High: 515.63, Low: 505.37, Close: 510.82, Volume: 2579400 },
      { Date: 1628078400000, Open: 513, High: 517.98, Low: 510.37, Close: 517.35, Volume: 2039400 },
      { Date: 1628164800000, Open: 517.13, High: 525.41, Low: 514.02, Close: 524.89, Volume: 2556700 },
      { Date: 1628251200000, Open: 524, High: 526.84, Low: 519.39, Close: 520.55, Volume: 1919800 },
      { Date: 1628510400000, Open: 521.15, High: 522.67, Low: 517.99, Close: 519.97, Volume: 1367800 },
      { Date: 1628596800000, Open: 520, High: 520.79, Low: 512.97, Close: 515.84, Volume: 1960500 },
      { Date: 1628683200000, Open: 517, High: 519.57, Low: 509.77, Close: 512.4, Volume: 1673900 },
      { Date: 1628769600000, Open: 511.86, High: 513, Low: 507.2, Close: 510.72, Volume: 1685700 },
      { Date: 1628856000000, Open: 512.64, High: 521.44, Low: 511.51, Close: 515.92, Volume: 2177700 },
      { Date: 1629115200000, Open: 515.24, High: 523.38, Low: 512.3, Close: 517.92, Volume: 2032800 },
      { Date: 1629201600000, Open: 515.47, High: 520.79, Low: 514.2, Close: 518.91, Volume: 2309800 },
      { Date: 1629288000000, Open: 520, High: 526.38, Low: 518.65, Close: 521.87, Volume: 2582000 },
      { Date: 1629374400000, Open: 522.74, High: 548.39, Low: 521.87, Close: 543.71, Volume: 7497300 },
      { Date: 1629460800000, Open: 545.09, High: 551.39, Low: 539.1, Close: 546.88, Volume: 3776400 },
      { Date: 1629720000000, Open: 545.98, High: 555.55, Low: 543.74, Close: 553.33, Volume: 2602000 },
      { Date: 1629806400000, Open: 551.48, High: 555.31, Low: 549.27, Close: 553.41, Volume: 2109500 },
      { Date: 1629892800000, Open: 550.16, High: 552.84, Low: 545.45, Close: 547.58, Volume: 2065600 },
      { Date: 1629979200000, Open: 546.16, High: 552.6, Low: 545.9, Close: 550.12, Volume: 1595500 },
      { Date: 1630065600000, Open: 551.6, High: 564.17, Low: 549.25, Close: 558.92, Volume: 3252600 },
      { Date: 1630324800000, Open: 557.25, High: 567.16, Low: 556.45, Close: 566.18, Volume: 2434800 },
      { Date: 1630411200000, Open: 566.12, High: 569.48, Low: 561.61, Close: 569.19, Volume: 2431900 },
      { Date: 1630497600000, Open: 569, High: 591, Low: 569, Close: 582.07, Volume: 5626200 },
      { Date: 1630584000000, Open: 583.68, High: 598.76, Low: 583.68, Close: 588.55, Volume: 6179900 },
      { Date: 1630670400000, Open: 585.8, High: 591.88, Low: 583.14, Close: 590.53, Volume: 2681200 },
      { Date: 1631016000000, Open: 594.69, High: 613.85, Low: 593.99, Close: 606.71, Volume: 5821400 },
      { Date: 1631102400000, Open: 603.84, High: 615.6, Low: 595.71, Close: 606.05, Volume: 5424500 },
      { Date: 1631188800000, Open: 606.47, High: 609.44, Low: 596.55, Close: 597.54, Volume: 2954200 },
      { Date: 1631275200000, Open: 598.16, High: 609.45, Low: 593.67, Close: 598.72, Volume: 3950800 },
      { Date: 1631534400000, Open: 598.57, High: 598.57, Low: 582.78, Close: 589.29, Volume: 3062900 },
      { Date: 1631620800000, Open: 584.89, High: 587.28, Low: 575.56, Close: 577.76, Volume: 3457000 },
      { Date: 1631707200000, Open: 578.17, High: 584.62, Low: 575.37, Close: 582.87, Volume: 2755600 },
      { Date: 1631793600000, Open: 584.3, High: 587.48, Low: 577.72, Close: 586.5, Volume: 1832000 },
      { Date: 1631880000000, Open: 587.85, High: 590.28, Low: 580.85, Close: 589.35, Volume: 4145100 },
     
    
    ];
  }

  ngOnInit(): void {

this.root = am5.Root.new("chartdiv");                       //  Root element


this.stockChart = this.root.container.children.push(am5stock.StockChart.new(this.root, {
}));


this.root.numberFormatter.set("numberFormat", "#,###.00");              // setting num format

this.mainPanel = this.stockChart.panels.push(am5stock.StockPanel.new(this.root, {                 // Create stock panel (chart)
  wheelY: "zoomX",
  panX: true,
  panY: true
}));


let valueAxis = this.mainPanel.yAxes.push(am5xy.ValueAxis.new(this.root, {                // y-axis
  renderer: am5xy.AxisRendererY.new(this.root, {
    pan: "zoom"
  }),
  extraMin: 0.1, // adds some space for for main series
  tooltip: am5.Tooltip.new(this.root, {}),
  numberFormat: "#,###.00",
  extraTooltipPrecision: 2
}));

this.dateAxis = this.mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(this.root, {               // x-axis
  name:'x-axis',
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(this.root, {}),
  tooltip: am5.Tooltip.new(this.root, {})
}));


// Add series

let valueSeries = this.mainPanel.series.push(am5xy.CandlestickSeries.new(this.root, {
  name: "Employees",
  clustered: false,
  valueXField: "Date",
  valueYField: "Close",
  highValueYField: "High",
  lowValueYField: "Low",
  openValueYField: "Open",
  calculateAggregates: true,
  xAxis: this.dateAxis,
  yAxis: valueAxis,
  legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
  legendRangeValueText: ""
}));


// Set main value series
this.stockChart.set("stockSeries", valueSeries);


// Add stock legend
this.valueLegend = this.mainPanel.plotContainer.children.push(am5stock.StockLegend.new(this.root, {
  stockChart: this.stockChart
}));


// Create volume axis
let volumeAxisRenderer = am5xy.AxisRendererY.new(this.root, {
  inside: true
});

volumeAxisRenderer.labels.template.set("forceHidden", true);
volumeAxisRenderer.grid.template.set("forceHidden", true);

let volumeValueAxis = this.mainPanel.yAxes.push(am5xy.ValueAxis.new(this.root, {
  numberFormat: "#.#a",
  height: am5.percent(20),
  y: am5.percent(100),
  centerY: am5.percent(100),
  renderer: volumeAxisRenderer
}));



let volumeSeries = this.mainPanel.series.push(am5xy.ColumnSeries.new(this.root, {               // Adding the series
  name: "Volume",
  clustered: false,
  valueXField: "Date",
  valueYField: "Volume",
  xAxis: this.dateAxis,
  yAxis: volumeValueAxis,
  legendValueText: "[bold]{valueY.formatNumber('#,###.0a')}[/]"
}));

volumeSeries.columns.template.setAll({
  strokeOpacity: 0,
  fillOpacity: 0.5
});


volumeSeries.columns.template.adapters.add("fill", (fill: any, target: any) => {        // coloring the columns
  let dataItem = target.dataItem;
  if (dataItem) {
    return this.stockChart.getVolumeColor(dataItem);
  }
  return fill;
})


this.stockChart.set("volumeSeries", volumeSeries);                  // setting main series
this.valueLegend.data.setAll([valueSeries, volumeSeries]);



this.mainPanel.set("cursor", am5xy.XYCursor.new(this.root, {      // Adding cursor
  yAxis: valueAxis,
  xAxis: this.dateAxis,
  snapToSeries: [valueSeries],
  snapToSeriesBy: "y!"
}));



let scrollbar = this.mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(this.root, {                // Adding scrollbar
  orientation: "horizontal",
  height: 50
}));
this.stockChart.toolsContainer.children.push(scrollbar);

let sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(this.root, {
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(this.root, {})
}));

let sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
  renderer: am5xy.AxisRendererY.new(this.root, {})
}));

let sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(this.root, {
  valueYField: "Close",
  valueXField: "Date",
  xAxis: sbDateAxis,
  yAxis: sbValueAxis
}));

sbSeries.fills.template.setAll({
  visible: true,
  fillOpacity: 0.3
});


let seriesSwitcher = am5stock.SeriesTypeControl.new(this.root, {          // Set up series type switcher
  stockChart: this.stockChart
});

seriesSwitcher.events.on("selected", (ev: any) => {
  this.setSeriesType(ev.item.id);
});

this.toolbar = am5stock.StockToolbar.new(this.root, {                  // toolbar     
  container: document.getElementById("chartcontrols"),
  stockChart: this.stockChart,
  controls: [
    am5stock.IndicatorControl.new(this.root, {
      stockChart: this.stockChart,
      legend: this.valueLegend
    }),
    am5stock.DateRangeSelector.new(this.root, {
      stockChart: this.stockChart
    }),
    am5stock.PeriodSelector.new(this.root, {
      stockChart: this.stockChart
    }),
    seriesSwitcher,
    am5stock.DrawingControl.new(this.root, {
      stockChart: this.stockChart
    }),
    am5stock.ResetControl.new(this.root, {
      stockChart: this.stockChart
    }),
    am5stock.SettingsControl.new(this.root, {
      stockChart: this.stockChart
    })
  ]
})

this.tooltip = am5.Tooltip.new(this.root, {
  getStrokeFromSprite: false,
  getFillFromSprite: false
});

this.tooltip.get("background").setAll({
  strokeOpacity: 1,
  stroke: am5.color(0x000000),
  fillOpacity: 1,
  fill: am5.color(0xffffff)
});




console.log(this.data, 'this.this.this.')


valueSeries.data.setAll(this.data);                   // data setting
volumeSeries.data.setAll(this.data);
sbSeries.data.setAll(this.data);
  }


  getNewSettings(series: any) {
    this.newSettings = [];
    am5.array.each(["name", "valueYField", "highValueYField", "lowValueYField", "openValueYField", "calculateAggregates", "valueXField", "xAxis", "yAxis", "legendValueText", "stroke", "fill"], (setting: any) => {
      this.newSettings[setting] = series.get(setting);
    });
    return this.newSettings;
  }
  
  setSeriesType(seriesType: any) {
    
    let currentSeries = this.stockChart.get("stockSeries");             // Get current series and its settings
    this.newSettings = this.getNewSettings(currentSeries);
  
   
    let data = currentSeries.data.values;                            // Remove previous series
    this.mainPanel.series.removeValue(currentSeries);
  
   
    let series;                                                  // Create new series
    switch (seriesType) {
      case "line":
        series = this.mainPanel.series.push(am5xy.LineSeries.new(this.root, this.newSettings));
        break;
      case "candlestick":
      case "procandlestick":
        this.newSettings.clustered = false;
        series = this.mainPanel.series.push(am5xy.CandlestickSeries.new(this.root, this.newSettings));
        if (seriesType == "procandlestick") {
          series.columns.template.get("themeTags").push("pro");
        }
        break;
      case "ohlc":
        this.newSettings.clustered = false;
        series = this.mainPanel.series.push(am5xy.OHLCSeries.new(this.root, this.newSettings));
        break;
    }
  
    
    if (series) {
      this.valueLegend.data.removeValue(currentSeries);                     // Setting new series 
      series.data.setAll(data);
      this.stockChart.set("stockSeries", series);
      let cursor = this.mainPanel.get("cursor");
      if (cursor) {
        cursor.set("snapToSeries", [series]);
      }
      this.valueLegend.data.insertIndex(0, series);
    }
  }


}



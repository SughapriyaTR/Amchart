import { Component, OnInit, VERSION } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5plugins_exporting from '@amcharts/amcharts5/plugins/exporting';
// import { data } from './data';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})


export class StockComponent implements OnInit {
  root: any;
  chart: any;
  data: any;
  xAxis: any;
  yAxis: any;

  constructor() {}



  ngOnInit() {

    this.root = am5.Root.new("chartdiv"); 

    this.root.setThemes([
  am5themes_Animated.new(this.root)
]);


this.chart = this.root.container.children.push( 
  am5xy.XYChart.new(this.root, {
    panY: false,
    wheelY: "zoomX",
    layout: this.root.verticalLayout,
    maxTooltipDistance: 0
  }) 
);

// Define data
this.data = [{
  date: new Date(2021, 0, 1).getTime(),
  value: 1,
  value2: 2.5
}, {
  date: new Date(2021, 0, 2).getTime(),
  value: 3,
  value2: 2.1
}, {
  date: new Date(2021, 0, 3).getTime(),
  value: 2,
  value2: 3
}, {
  date: new Date(2021, 0, 4).getTime(),
  value: 1,
  value2: 2
}, {
  date: new Date(2021, 0, 5).getTime(),
  value: 1.5,
  value2: 0.5
}];

// Create Y-axis
this.yAxis = this.chart.yAxes.push(
  am5xy.ValueAxis.new(this.root, {
    extraTooltipPrecision: 1,
    renderer: am5xy.AxisRendererY.new(this.root, {})
  })
);

// Create X-Axis
this.xAxis = this.chart.xAxes.push(
  am5xy.DateAxis.new(this.root, {
    baseInterval: { timeUnit: "day", count: 1 },
    renderer: am5xy.AxisRendererX.new(this.root, {
      minGridDistance: 20
    }),
  })
);

this.createSeries("Series #1", "value");
this.createSeries("Series #2", "value2");


// Add cursor
this.chart.set("cursor", am5xy.XYCursor.new(this.root, {
  behavior: "zoomXY",
  xAxis: this.xAxis
}));

this.xAxis.set("tooltip", am5.Tooltip.new(this.root, {
  themeTags: ["axis"]
}));

this.yAxis.set("tooltip", am5.Tooltip.new(this.root, {
  themeTags: ["axis"]
}));

  }



// Create series
 createSeries(name: any, field: any) {
  var series = this.chart.series.push( 
    am5xy.LineSeries.new(this.root, { 
      name: name,
      xAxis: this.xAxis, 
      yAxis: this.yAxis, 
      valueYField: field, 
      valueXField: "date",
      tooltip: am5.Tooltip.new(this.root, {})
    }) 
  );
  
  series.bullets.push( () => {
    return am5.Bullet.new(this.root, {
      sprite: am5.Circle.new(this.root, {
        radius: 5,
        fill: series.get("fill")
      })
    });
  });
  
  series.strokes.template.set("strokeWidth", );
  
  series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
  series.data.setAll(this.data);
}





}

import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5stock from '@amcharts/amcharts5/stock';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { HttpClient } from '@angular/common/http';


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
  sampleData: any;
  newArray: any;
  transactionType: any;

  constructor(public http: HttpClient ) {

    
   }

  ngOnInit(): void {


    this.http.get('assets/data.json').subscribe((data: any) => {
      this.data = data;
      this.data.forEach((x: any) => {
        x.adate = new Date(Date.parse(x.adate)).getTime();
      })
    });

    this.http.get('assets/data1.json').subscribe((data1: any) => {
      this.sampleData = data1;
      this.sampleData.forEach((x1: any) => {
        x1.adate = new Date(Date.parse(x1.adate)).getTime();
      })
    })

    setTimeout(() => {
      console.log(this.data, '555');
      console.log(this.sampleData, '111111111');

      this.newArray = this.data.filter((obj1: any) => {
        return this.sampleData.some((obj2: any) => {
          return obj1.adate === obj2.adate;
        });
      });
      console.log(this.newArray, 'newArraynewArray')


  

    

      this.initialLoad(); 
    },100);

  }

  initialLoad() {
    this.root = am5.Root.new("chartdiv");                       //  Root element

    this.stockChart = this.root.container.children.push(am5stock.StockChart.new(this.root, {
        panY: false,
        wheelY: "zoomX",
        layout: this.root.verticalLayout,
        maxTooltipDistance: 0
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

 

    let valueSeries1 = this.mainPanel.series.push(am5xy.LineSeries.new(this.root, {
      name: "Employees",
      clustered: false,
      valueXField: "adate",
      valueYField: "aclose",
      highValueYField: "ahigh",
      lowValueYField: "alow",
      openValueYField: "aopen",
      calculateAggregates: true,
      xAxis: this.dateAxis,
      yAxis: valueAxis,
      legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
      legendRangeValueText: "",
      stroke: am5.color("#FFFFFF"),
    }));

    let valueSeries = this.mainPanel.series.push(am5xy.LineSeries.new(this.root, {
      name: "Employees",
      clustered: false,
      valueXField: "adate",
      valueYField: "aclose",
      highValueYField: "ahigh",
      lowValueYField: "alow",
      openValueYField: "aopen",
      calculateAggregates: true,
      xAxis: this.dateAxis,
      yAxis: valueAxis,
      legendValueText: "open: [bold]{openValueY}[/] high: [bold]{highValueY}[/] low: [bold]{lowValueY}[/] close: [bold]{valueY}[/]",
      legendRangeValueText: "",
      // stroke: am5.color("#FF0000")
    }));

    valueSeries1.bullets.push( (root: am5.Root, series: any, dataItem: any) => {
      console.log(dataItem.dataContext.transaction_data?.type, 'dataItem: any')
      if(dataItem.dataContext.transaction_data?.type == 'Buy' || dataItem.dataContext.transaction_data?.type == 'Buy Cover') {
        return am5.Bullet.new(this.root, {
          sprite: am5.Circle.new(this.root, {
            radius: 5,
            fill: valueSeries.get("fill"),
            strokeWidth: 2,
            toggleKey: "active",
            tooltipHTML: `<div style="background-color: green; padding: 10px; border-radius: 4px">{transaction_data.type} : {transaction_data.price_per_share}</div>
            `,
            tooltip: am5.Tooltip.new(this.root, {
              getFillFromSprite: false,
            }),
          })
        });  
      } else {
        return am5.Bullet.new(this.root, {
          sprite: am5.Circle.new(this.root, {
            radius: 5,
            fill: valueSeries.get("fill"),
            strokeWidth: 2,
            toggleKey: "active",
            tooltipHTML: `<div style="background-color: red; padding: 10px; border-radius: 4px">{transaction_data.type} : {transaction_data.price_per_share}</div>
            `,
            tooltip: am5.Tooltip.new(this.root, {
              getFillFromSprite: false,
            }),
          })
        });  
      }         
    });

    // this.tooltip = am5.Tooltip.new(this.root, {
    //   autoTextColor: false,
    //   labelText: "{transaction_data.type}",
    // });
    // this.tooltip.label.fill = am5.color(0xFF0000); 
    // valueSeries1.set("tooltip", this.tooltip);

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
      valueXField: "adate",
      valueYField: "volume",
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

    valueSeries1.data.setAll(this.newArray); 
    valueSeries.data.setAll(this.data);                   // data setting
                      // data setting
    volumeSeries.data.setAll(this.data);

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
  
   
    // let data = currentSeries.data.values;                            // Remove previous series
    // this.mainPanel.series.removeValue(currentSeries);
  
    // // let series: any;  
    // var series = this.mainPanel.series.push(
    //   am5xy.LineSeries.new(this.root, this.newSettings));                                                // Create new series
   
  
  //    series.bullets.push((root: any) => {
  //     return am5.Bullet.new(root, {
  //       sprite: am5.Circle.new(root, {
  //         radius: 4,
  //         fill: series.get("fill")
  //       })
  //     });
  //   });



  //   series.strokes.template.set("strokeWidth", );
  
  // series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
  // series.data.setAll(this.data);
    

  }


}



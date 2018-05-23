import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { D3Service, D3, RGBColor, Selection } from 'd3-ng2-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private d3: D3;

  constructor(public navCtrl: NavController, d3Service: D3Service, public navParams: NavParams) {
    this.d3 = d3Service.getD3();
    
  }

  public GeneratePieChart(){
    //Reference link: http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
    //This example has been modified to use TypeScript
    interface Data { // for holding data
      label: string;
      count: number;
    };
    console.log("Generating Pie chart");

    let d3 = this.d3;
    let dataset: Data[] = [
      { label: 'Men', count: 33 },
      { label: 'Women', count: 66 }
    ]

    //chart dimensions & properties
    let width: number = 200;
    let height: number = 200;
    let radius: number = Math.min(width, height)/2;
    let color: any = d3.scaleOrdinal(['#9313D1', '#FF39A6']);

    //Constructing chart
    let svg: any = d3.select("#chart")
                     .append("svg")
                     .attr("width", width)
                     .attr("height", height)
                     .append("g")
                     .attr("transform", "translate( " + + (width / 2) +  "," + (height / 2) + ")");
    let arc: any = d3.arc()
                     .innerRadius(0)
                     .outerRadius(radius);

    let pie: any = d3.pie<Data>()
                     .value(function(d) {return d.count; })
                     .sort(null);

    let path: any = svg.selectAll('path')
                       .data(pie(dataset))
                       .enter()
                       .append('path')
                       .attr('d', <any>arc)
                       .attr('fill', (d, i) => color(((<any>d.data).label)));
  }
}

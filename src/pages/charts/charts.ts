import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { D3Service, D3, RGBColor, Selection } from 'd3-ng2-service';
/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  private d3: D3;
  constructor(public navCtrl: NavController, 
              d3Service: D3Service,
              public navParams: NavParams) {
    this.d3 = d3Service.getD3();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

  public GeneratePieChart(){
    let svg: any = this.d3.select('svg'),
                   width = svg.attr('width'),
                   height = svg.attr('height'),
                   radius = Math.min(width, height) / 2,
                   g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

                   
  }

}

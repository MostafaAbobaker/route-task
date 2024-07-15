import { Component,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.scss']
})
export class CustomerChartComponent {

  canvas:any;
  ctx:any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit(): void {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx,{
      type:'line',
      data:{
        datasets:[{
          label:'current vallue',
          data:[0,20,40,50],
          backgroundColor:'rgba(115 185 243 / 65%)',
          borderColor: '#007ee7',
          fill:true,
        },
        {
          label:'Invested Amount',
          data:[0,20,60,80],
          backgroundColor:'#47a0e8',
          borderColor: '#007ee7',
          fill:true,
        }
      ],
      labels:['january 2019' , 'february 2019' , 'march 2019' , 'april 2019']
      },
    });
    
  }

}

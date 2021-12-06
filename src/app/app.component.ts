import { Component } from '@angular/core';
import { ChartService } from './chart.service';
import {Chart , registerables} from 'chart.js'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//0: {id: 1, company: 'Matrix', employees: Array(5)}
//1: {id: 2, company: 'Apple', employees: Array(5)}
//2: {id: 3, company: 'Intel', employees: Array(5)}
export class AppComponent {
data: any=[]
company:any
employeesCount:any=[]
chart: any = []

constructor(private chartData:ChartService) {
  Chart.register(...registerables);
}
ngOnInit(){
  this.chartData.myData().then(res=>{
    this.data=res;
    
    this.chart = new Chart('canvas', {
      type:'line',
      data:{
        datasets:[
          {
            label:this.data[0].company,
            data: this.data[0].employees,
            borderWidth:2,
            backgroundColor:'green',
            pointRadius:7
            
          },
          {
            label:this.data[1].company,
            data: this.data[1].employees,
            borderWidth:1,
            fill:false,
            backgroundColor:'red',
            showLine:false
          },
          {
            type:'bar',
            label:this.data[2].company,
            data: this.data[2].employees,
            backgroundColor:'blue',
          }
          
        ],
        labels:["January", "February", "March", "April", "May"]
        
      },
      
    })
    console.log(this.data)})


  
   
    
    //show Chart Data
    
   
    
    

}
}

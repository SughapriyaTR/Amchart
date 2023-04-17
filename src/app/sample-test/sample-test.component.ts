import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.scss']
})
export class SampleTestComponent implements OnInit {
  data: any;
  volumeData: any;
  volmoValue: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('assets/data.json').subscribe((data: any) => {
      this.data = data;
      this.data.forEach((x: any) => {
        x.adate = new Date(Date.parse(x.adate)).getTime();
      })
    });

    this.http.get('assets/volume.json').subscribe((data: any) => {
      this.volumeData = data;
      this.volumeData.forEach((x: any) => {
        x.adate = new Date(Date.parse(x.adate)).getTime();
      })
    });

  }

  addVol() {
    this.volmoValue = true;
    console.log(this.data, '555');
    console.log(this.volumeData, '222222222222222222');
    this.data.forEach((element: any) => {
      this.volumeData.forEach((data: any) => {
        if(element.adate == data.adate) {
          element.VOLMO252_111617 = data.VOLMO252_111617;
          element.adate = new Date(element.adate).toDateString();
        }
      });        
    });
  console.log(this.data, '555');
  }

}

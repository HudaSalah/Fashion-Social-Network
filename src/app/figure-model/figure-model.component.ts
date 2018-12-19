import { Component, OnInit } from '@angular/core';
import { GetModelDataService } from '../get-model-data.service'; //for import service

@Component({
  selector: 'app-figure-model',
  templateUrl: './figure-model.component.html',
  styleUrls: ['./figure-model.component.scss']
})
export class FigureModelComponent implements OnInit {

  ModelData: Array<object>; 
  constructor(private Data: GetModelDataService) { 
    this.ModelData = [];
  }
 //get data from json file
 getModelData(): void {
  let path: string = '../assets/model-Data.json';
  this.Data.getData(path).subscribe(
    res => {
      this.ModelData = res; //return json data in this arr
      console.log(this.ModelData);
    },
    err => { console.log(err); },
    () => { }
  );
}
  ngOnInit() {
    this.getModelData();
  }

}

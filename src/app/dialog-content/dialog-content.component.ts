import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  jsonString: string;
  mergeString: Object;

  constructor(private jsonService: JsonService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getJson();
    this.getMerged();
    console.log(this.jsonString);
  }

  private getJson(){
    this.jsonService.getJsonService().subscribe(data => {
      console.log(data);
      this.jsonString = data;
      //console.log(this.json);
    });
  }

  private getMerged(){
    this.jsonService.getMergedService().subscribe(data => {
      console.log(data);
      this.mergeString = data;
      //console.log(this.json);
    });
  }

}

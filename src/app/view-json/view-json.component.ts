import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../json.service';
import { Json } from '../json';

@Component({
  selector: 'app-view-json',
  templateUrl: './view-json.component.html',
  styleUrls: ['./view-json.component.css']
})
export class ViewJsonComponent implements OnInit {

  json: Json[];

  constructor(private jsonService: JsonService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getJson();
    console.log(this.json);
  }

  private getJson(){
    this.jsonService.getJsonService().subscribe(data => {
      console.log(data);
      this.json = data;
      //console.log(this.json);
    });
  }


}

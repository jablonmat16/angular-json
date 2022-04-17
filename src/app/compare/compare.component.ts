import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environment } from '../environment';
import { EnvironmentService } from '../environment.service';
import { Json } from '../json';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  json: Json[];
  environment: Environment[];
  compare: Environment[];

  constructor(private jsonService: JsonService, private environmentService: EnvironmentService,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getJson();
    console.log(this.json);
    //this.getEnvironment();
  }

  private getJson(){
    this.jsonService.getJsonService().subscribe(data => {
      //console.log(data);
      this.json = data;
      //console.log(this.json);
    });
  }

  getEnvironment(){
    this.environmentService.getEnvironmentService().subscribe(data => {
      console.log(data);
      this.environment = data;
      //console.log(this.json);
    });
  }

  updateEnvironment(): void{
    this.environmentService.updateEnvironmentService(this.environment).subscribe( data =>{
      this.goToEnvironmentList();
    }
    , error => console.log(error));
  }

  goToEnvironmentList(){
    this.router.navigate(['/test']);
  }

  // deleteCompare(path: string){
  //   this.environmentService.deleteCompare(path).subscribe( data => {
  //     this,this.getEnvironment();
  //   })
  // }

  // deleteSelection(){
  //   for(let environments of this.environment){
  //     if(environments.select != true){
  //       this.deleteCompare(environments.path);
  //     }
  //   }
  // }

  onChangeSelect($event){
    const path = $event.target.value;
    const isChecked = $event.target.checked;
    this.compare = this.environment.map((d) => {
      if(d.path == path) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
    console.log(this.compare);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlserviceService } from '../urlservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private _http:HttpClient,private _apiURLobj:UrlserviceService) { }
  private _apiSubscribeURL:string=this._apiURLobj.apiURL+"userSubscribe"
  public output:any
  ngOnInit(): void {
  }
  onClickSubmit(userDetails:any){
    this._http.post(this._apiSubscribeURL,userDetails).subscribe((data:any)=>{
      //console.log(data)
    //alert(data )
    this.output=data.response
    })
  }


  resetUserForm(userSubscribe:NgForm){
    userSubscribe.resetForm()
  }
}

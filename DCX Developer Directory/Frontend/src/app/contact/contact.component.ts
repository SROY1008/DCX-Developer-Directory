import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UrlserviceService } from '../urlservice.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _http:HttpClient,private _apiURLobjt:UrlserviceService) { }

  private _apiContactURL:string=this._apiURLobjt.apiURL+"userContact"
  public output:any


  ngOnInit(): void {
  }

  onClickSubmit(userDetails:any)
  {
    this._http.post(this._apiContactURL,userDetails).subscribe((data:any)=>{
      // console.log(data)
      this.output=data.response

    })
  }

  resetUserForm(usercontact:NgForm)
  {
    usercontact.resetForm()
  }

}

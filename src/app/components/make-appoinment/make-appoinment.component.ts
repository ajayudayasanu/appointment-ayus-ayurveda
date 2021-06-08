import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/messages.model';
import { AppoinmentService } from 'src/app/services/appoinment.service';

@Component({
  selector: 'app-make-appoinment',
  templateUrl: './make-appoinment.component.html',
  styleUrls: ['./make-appoinment.component.css']
})
export class MakeAppoinmentComponent implements OnInit {

  constructor(private appoinmentService:  AppoinmentService) { }
  messages : Message[];
  ngOnInit(): void {
    this.appoinmentService.getAppoinment().subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}

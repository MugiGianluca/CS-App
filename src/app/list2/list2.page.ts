import { Component, OnInit} from '@angular/core';

// Services
import { AlertController } from '@ionic/angular';
import {Proveedor1Service} from  'src/app/proveedor1.service'



@Component({
  selector: 'app-list2',
  templateUrl: './list2.page.html',
  styleUrls: ['./list2.page.scss'],
})


export class List2Page implements OnInit{
equipos;

  constructor(public alertController: AlertController,public proveedor: Proveedor1Service) {}

ngOnInit(){
  this.GetTeams();
}


async GetTeams(){

await this.proveedor.ObtenesEquipos()
.subscribe(res => {
  this.equipos= res.data;
  console.log(res);
}, err => {
  console.log('Error', err);
});
  }
    }

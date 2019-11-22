import { DocumentViewer,DocumentViewerOptions  } from '@ionic-native/document-viewer/ngx';
import { Component, OnInit } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  constructor(private platform: Platform, private document: DocumentViewer,private file: File, private transfer:FileTransfer) {
  }



  ngOnInit() {
  }




openLocalPdf(){
  console.log("Ok");
  const options: DocumentViewerOptions= {
    title:'My PDF'
  };
  this.document.viewDocument("www/assets/prueba.pdf",'/application/pdf', options)
}


downloadAndOpenPdf(){
  console.log("Ok");
  let path = null;
  if (this.platform.is('ios')) {
    path = this.file.documentsDirectory;
  } else {

path = this.file.dataDirectory;
  }

  const transfer = this.transfer.create();
  transfer.download('http://www.colorquimica.com.co/wp-content/uploads/2017/09/test.pdf',path + 'myfile.pdf').then(entry =>{
let url = entry.toUrl();
this.document.viewDocument(url,'/application/pdf', {});

});

}



}

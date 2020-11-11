import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientAng';
  listaProd: string[];    //lista che conterra' il json
  obs : Observable<Object>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  visuaLista() : void {
    //richiesta http al server con il json
    this.obs = this.http.get('https://3000-ff2887aa-af05-42c3-8613-3388c83363ab.ws-eu01.gitpod.io/api/products');
    this.obs.subscribe(this.getData);
  }

  getData = data => {
    this.listaProd = data['products'];   //prende il 'products del JSON'
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}
  //Nota: Hay que arrancar el JSON SERVER, lo he dejado en package.json
  //se arranca con:  npm run db
  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  //MBA - Con Fetch
  async flekichin() {
    const res = await fetch('http://localhost:3000/grafica'),
      data = await res.json();
    console.log(data);
  }
}

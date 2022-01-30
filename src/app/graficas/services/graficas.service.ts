import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}
  //Nota: Hay que arrancar el JSON SERVER, lo he dejado en package.json
  //se arranca con:  npm run db

  //No se utiliza, es para que yo vea las diferentes formas de hacerlo
  getUsuariosRS() {
    return this.http.get('http://localhost:3000/grafica');
  }

  //Utilizamos los pipes RXJS, con el pipe map conseguimos convertirlo a
  //un observable {labels, value}
  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica').pipe(
      delay(1000), //Solo para simular que cuesta obtener los datos y se vea Cargando datos...
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }

  //MBA - Con Fetch
  async flekichin() {
    const res = await fetch('http://localhost:3000/grafica'),
      data = await res.json();
    console.log(data);
  }
}

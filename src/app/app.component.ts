import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tag } from "rxjs-spy/operators/tag"
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/from';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private httpClient: HttpClient) { }
  post$ = Observable.timer(10, 500).pipe(
    tag('app-timer'),
    switchMap((duration) => {
      return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${duration % 10 + 1}`)
    }),
    
  )
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   console.log( this.post$.subscribe());
  }

}

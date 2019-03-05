import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  moviesList;
  dtTrigger = new Subject<any[]>();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.http.get('http://starlord.hackerearth.com/movies')
      .subscribe(resData => {
        this.moviesList = resData;
        this.dtTrigger.next();
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

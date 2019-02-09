import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { CrisisService }  from '../crisis.service';
import { Crisis } from '../crisis';
 
@Component({
  selector: 'app-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.css']
})
export class CrisisCenterHomeComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;
 
  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }
}
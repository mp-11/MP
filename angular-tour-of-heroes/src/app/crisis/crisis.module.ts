import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisListComponent } from './crisis-list/crisis-list.component'
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    CrisisCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }

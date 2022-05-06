import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {CommentsComponent} from "./comments.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";


@NgModule({
  declarations: [
    CommentsComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class CommentsModule { }

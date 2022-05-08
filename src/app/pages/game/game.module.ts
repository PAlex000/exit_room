import  { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import {GameComponent} from "./game.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }

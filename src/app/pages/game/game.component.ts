import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  signAnswer = new FormGroup({
    answer: new FormControl('')
  });
  counter: number = 1;
  backgroundImg1 = "/assets/first_room.png"
  backgroundImg2 = "/assets/second_room.png"
  backgroundImg3 = "/assets/final_room.png"

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.counter)
    if (this.signAnswer.get("answer")?.value == "elsovalasz" && this.counter == 1) {
      alert("Jó válasz, ügyes vagy!")
      this.counter++;
    }
    else if (this.signAnswer.get("answer")?.value == "masodikvalasz" && this.counter == 2) {
      alert("Jó válasz, ügyes vagy!")
      this.counter++;
    }
    else if (this.signAnswer.get("answer")?.value == "harmadikvalasz" && this.counter == 3) {
      alert("Jó válasz, ügyes vagy! Megnyerted a játékot! Kérlek kommentelj valamit és legyél könyörületes rajtam.")
      this.counter++;
    }
    else {
      alert("Nem jó válasz! A válaszok sorrendje: elsovalasz, masodikvalasz, harmadikvalasz")
    }
    if (this.counter == 4) {
      this.counter = 1;
      this.router.navigateByUrl('/comments');
    }
  }

}

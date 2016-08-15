import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer/trainer';
import { TrainerService } from '../trainer.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'my-trainers',
  template:
  `
  <h2>{{title}}</h2>
  <ul class="trainers">
    <li *ngFor="let trainer of trainers"  (click)="gotoDetail(trainer._id)">
      {{trainer.name}}
    </li>
  </ul>
  `
})

export class TrainerListComponent implements OnInit {
  title = 'Trainers';
  trainers: Trainer[];
  selectedTrainer: Trainer;
  errorMessage: string = '';
  
  constructor(private router: Router,private trainerService: TrainerService) { }
  
  getTrainers() {
    this.trainerService.getTrainers()
                         .subscribe(
                           trainers => this.trainers = trainers,
                           error =>  this.errorMessage = <any>error);
                           
  }
  ngOnInit() {
    this.getTrainers();
  }


  gotoDetail(id) {
    this.router.navigate(['/trainer', id]);
  }

}


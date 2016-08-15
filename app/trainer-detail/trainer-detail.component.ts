import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer/trainer';
import { ActivatedRoute, Params } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'my-trainer-detail',
  template: `
    
    <div *ngIf="trainer">
      <h2>{{trainer.name}}'s details</h2>
      <div>
        <label>id: </label>{{trainer._id}}
      </div>
      <div>
        <label>name: </label>{{trainer.name}}
      </div>
    </div>
  `
})
export class TrainerDetailComponent implements OnInit {

  trainer: Trainer[];
  errorMessage: string = '';
  
  constructor(private route: ActivatedRoute,private trainerService: TrainerService) { }
  

  ngOnInit() {
    // #docregion get-id
    this.route.params.forEach((params: Params) => {
    console.log('params');console.log(params['id']);
      let id = params['id'];
      
    this.trainerService.getTrainer(id)
                         .subscribe(
                           trainer => this.trainer = trainer,
                           error =>  this.errorMessage = <any>error);
    });
    // #enddocregion get-id
  }
}

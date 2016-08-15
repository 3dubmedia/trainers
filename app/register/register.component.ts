import { Component, OnInit } from '@angular/core';
import { Trainer } from '../trainer/trainer';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'register',
  templateUrl: 'app/register/registration-form.html'
})
export class RegisterComponent {
    

    trainers: Trainer[];
    errorMessage: string = '';
    
    constructor(private router: Router,private trainerService: TrainerService) { }

    model = new Trainer('');
    submitted = false;
    onSubmit() { this.submitted = true; }
    get diagnostic() { return JSON.stringify(this.model); }

    active = true;
    
    newTrainer() {
    
      console.log('form submit');
      console.log(this.model);
      
      this.active = false;
      setTimeout(() => this.active = true, 0);
      
      this.trainerService.addTrainer(this.model)
                         .subscribe(
                           trainers => this.trainers = trainers,
                           error =>  this.errorMessage = <any>error);
                           
      this.router.navigate(['/trainers']);

    }
}



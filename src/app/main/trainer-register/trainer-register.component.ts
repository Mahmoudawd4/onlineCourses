import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainer } from 'src/app/_models/trainer.model';
import { TrainerService } from 'src/app/_services/trainer.service';

@Component({
  selector: 'app-trainer-register',
  templateUrl: './trainer-register.component.html',
  styleUrls: ['./trainer-register.component.css'],
})
export class TrainerRegisterComponent implements OnInit {
  constructor(private trainerService: TrainerService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  trainersArray!: Trainer[];

  newTrainer: Trainer = {
    fname: '',
    lname: '',
    gender: '', //enum
    phone: '',
    email: '',
    password: '',
  };

  addTrainer(form: NgForm) {
    // console.log(form.value);
    this.newTrainer.fname = form.value['fname'];
    this.newTrainer.lname = form.value['lname'];
    this.newTrainer.gender = form.value['gender'];
    this.newTrainer.phone = form.value['phone'];
    this.newTrainer.email = form.value['email'];
    this.newTrainer.password = form.value['password'];

    this.trainerService.addTrainer(this.newTrainer).subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => {
        console.log('Error registering Trainer');
        console.log(err);
        
      }
    );
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    // console.log(form.value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }
  
}

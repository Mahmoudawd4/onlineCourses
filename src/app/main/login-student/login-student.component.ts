import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private router: Router,
    ) {

    }

  ngOnInit(): void {
  }


  data={email:"",password:""}

  login(form: NgForm){
    if(form.invalid){
      return;
    }
    // console.log(form);

    this.data.email=form.value.email
    this.data.password=form.value.password

    // console.log(this.data);
//            routerLink="/main/home"

    this.studentService.checkStudent(this.data).subscribe(
      (res)=>{
        console.log(res);
        localStorage.setItem('Authorization', "bearer "+res.access_token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('id', res.id+"");
        sessionStorage.setItem('role',res.role);
        sessionStorage.setItem('id',res.id+"");
        localStorage.setItem('name',res.name);
        localStorage.setItem('email',this.data.email);


       
 
      this.studentService.studentloginservice.emit(res)

      this.router.navigate(['/main/home']);


      },
      (err) => {
        console.log('Error login');
        console.log(err);
        alert('Error login');
        this.router.navigate(['/main/login/student']);


      }
    )

  }



}

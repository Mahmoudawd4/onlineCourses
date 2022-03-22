import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course.model';
import { Student } from 'src/app/_models/student.model';
import { CoursesService } from 'src/app/_services/courses.service';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-students-in-course',
  templateUrl: './students-in-course.component.html',
  styleUrls: ['./students-in-course.component.css']
})
export class StudentsInCourseComponent implements OnInit {

  constructor(private courseService:CoursesService, private activatedRoute:ActivatedRoute ) {}

  StudentsArray:Student[]=[
    {

    }
  ];
  thiscourse!:Course;

  course!:Course;
  id!:number;
  // url="http://localhost:8000/uploads/students/";
  p: number = 1;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['courseId'];
      // console.log(params);
    });
    this.getCourseById(this.id);
    this.getAllstudents(this.id);
  }

  getCourseById(id:number){
    this.courseService.getCourseById(id).subscribe(
      res=>{
        // console.log(res);
        this.course = res;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getAllstudents(id:number) {
    this.courseService.getStudentsInCourse(id).subscribe(
      (res) => {
        this.StudentsArray = res.students!;
        // console.log(this.StudentsArray);
      },
      (err) => {
        console.log('error in get students');
        console.log(err);
      }
    );}
    

}
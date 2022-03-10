import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
import { CategororyService } from 'src/app/_services/categorory.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private categoryService: CategororyService) { }

  
  url = 'http://localhost:8000/uploads/categores/';


  catarray!:Category[];
  array!:Category[];
  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.categoryService.getcategories().subscribe(
      (res)=>{
        this.catarray=res.data;
        this.array=this.catarray.slice(0,5);
        // console.log(res);
        
      },
      (err)=>{
        console.log(err);
      },
      ()=>{}
    );}
    

}

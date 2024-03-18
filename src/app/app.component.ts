import { HttpClient } from '@angular/common/http';
import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, of, startWith } from 'rxjs';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {


  data:any;

  
  ngOnInit(): void {

    this.getData()
    
  }

  constructor(private postService:PostService) {}

  createPost() {
    const newPost = {
      title:"Yangi post",
      body:"post matni" ,
      userId:1


    };
    this.postService.createPost(newPost).subscribe(response =>{
      console.log("Yangi post yaratildi: " , response);

    } , error =>{
      console.error("Xatolik yuz berdi: ", error);
      

    })


  }


  updatePost(postId:number){
    const updatePost = {
      titke:"O\'zgartililgan sarlavha",
      body:"O\'zgartililgan post matni"

    };

    this.postService.updatePost(postId , updatePost).subscribe(response =>{
      console.log("Post yangilandi" , response);
      

    } ,error =>{
      console.error("xatolik: "  , error);
      

    })

  }


  deletePost(postId:number){

 
    
    this.postService.deletPost(postId).subscribe(respose =>{

      console.log("Post o'chirildi" ,respose );

    } , error =>{
      console.error("Xatolik " ,error);
      
    })

  }





  getData(){

    this.postService.getData().subscribe(response =>{
      this.data =  response;

      console.log(this.data);
      



    })

  }









    
    
    
  }





  





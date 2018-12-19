import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"; 

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(".info").on("click",function(){

      $(".overlay").removeClass("animated fadeOut");
      $(".overlay").addClass("animated fadeIn");
      $(".overlay").css("display","flex");
    
    });

    $(".close").on("click",function(){

      $(".overlay").removeClass("animated fadeIn");
      $(".overlay").addClass("animated fadeOut");
      $(".overlay").css("display","none");
      
     
    
    });
  }

}

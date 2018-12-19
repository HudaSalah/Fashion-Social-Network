import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-model-profile",
  templateUrl: "./model-profile.component.html",
  styleUrls: ["./model-profile.component.scss"]
})
export class ModelProfileComponent implements OnInit {
  constructor() {}

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

    // $(".Model--show").one("click", function() {
    //   debugger;
    //   $(".Model-pic").addClass("animated slideOutLeft");
    //   setTimeout(function() {
    //     $(".Model--show")
    //       .empty()
    //       .addClass("animated slideOutLeft col-md-12")
    //       .css("height", "100%");
    //   }, 1000);
    // });
  }
}

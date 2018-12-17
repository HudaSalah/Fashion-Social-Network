import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".iconsToggle").on("click",function(){
        var bars_State = $(".bars").css("display");

        if(bars_State == "inline")
        {
          $(".bars").css("display","none");
          $(".times").css("display","inline");
        }
        else
        {
          $(".times").css("display","none");
          $(".bars").css("display","inline");         
        }

    });
  }

}

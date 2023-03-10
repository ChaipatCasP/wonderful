import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-top',
  templateUrl: './banner-top.component.html',
  styleUrls: ['./banner-top.component.scss']
})
export class BannerTopComponent {

  imageObject = [
    {
      image:'./../../assets/img_banner/Everyday_Matcha_Latte_Home_Page-Eng-1536x504.jpg',
      thumbImage:'./../../assets/img_banner/Everyday_Matcha_Latte_Home_Page-Eng-1536x504.jpg',
      title: '',
    },
    {
      image:'./../../assets/img_banner/Home_Page_Destop-1536x504.png',
      thumbImage:'./../../assets/img_banner/Home_Page_Destop-1536x504.png',
      title: '',
    },
  ];

}

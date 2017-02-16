import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-copmonent',
  templateUrl: './youtube-copmonent.component.html',
  styleUrls: ['./youtube-copmonent.component.css']
})
export class YoutubeCopmonentComponent implements OnInit {
  public items: Array<any> = [];
  constructor() { }
  ngOnInit() {
    this.items = [
  {
    title: 'JavaScript',
   link: '',
   image: 'http://www.itmathrepetitor.ru/wp-content/uploads/2015/03/JavaScript-logo.png'
  },
   {
     title: 'C++',
     link: '',
     image: 'http://www.itmathrepetitor.ru/wp-content/uploads/2015/03/JavaScript-logo.png'
   }
  
]


  }

}

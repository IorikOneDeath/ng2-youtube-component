import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-copmonent',
  templateUrl: './youtube-copmonent.component.html',
  styleUrls: ['./youtube-copmonent.component.css']
})
export class YoutubeCopmonentComponent implements OnInit {
  @Input() public name: string;
           public link: string;
           public picture: string;

  constructor() { }

  ngOnInit() {
    console.log(this.name);
    this.link = 'https://www.youtube.com/';
    this.picture = 'file:///home/andrei/Downloads/yt.png';

    if (this.name === 'JS'){
    this.link = 'https://www.youtube.com/watch?v=Ukg_U3CnJWI&t=182s';
    this.picture = 'file:///home/andrei/Downloads/learn-javascript.png';
    }
    if (this.name === 'C++'){
      this.link = 'https://www.youtube.com/watch?v=Rub-JsjMhWY';
      this.picture = ''
    }
  }

}

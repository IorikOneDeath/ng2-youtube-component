import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-item',
  templateUrl: './youtube-item.component.html',
  styleUrls: ['./youtube-item.component.css']
})
export class YoutubeItemComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  @Input() image: string;           
  constructor() { }
  ngOnInit() {

  }
}
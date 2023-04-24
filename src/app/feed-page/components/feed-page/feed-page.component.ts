import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  protected readonly API_URL = "/articles"
  constructor() { }

  ngOnInit(): void {
    console.log("FeedPageComponent")
  }

}

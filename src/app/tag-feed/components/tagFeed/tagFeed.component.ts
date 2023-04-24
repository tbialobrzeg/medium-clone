import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss']
})
export class TagFeedComponent implements OnInit, OnDestroy {
  protected tagName!: string;
  protected apiUrl!: string;
  private routeSubscription !: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(data => {
      let tagName = data.get('slug');
      if (tagName) {
        this.tagName = tagName;
        this.apiUrl = `/articles?tag=${this.tagName}`
      }

    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
      
  }
}

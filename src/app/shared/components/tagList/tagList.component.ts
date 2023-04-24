import { Component, Input } from '@angular/core'
import { PopularTagType } from '../../../popular-tags/types/popular-tag.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html'
})
export class TagListComponent {
  @Input()
  tags!: PopularTagType[]
}

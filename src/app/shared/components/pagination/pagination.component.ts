import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { UtilsService } from 'src/app/shared/services/utils.service'

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input()
  public total!: number
  @Input()
  public limit!: number
  @Input()
  public currentPage!: number
  @Input()
  public url!: string

  protected pagesCount!: number
  protected pages!: number[]

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.countPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.countPages();
  }

  countPages() {
    this.pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}

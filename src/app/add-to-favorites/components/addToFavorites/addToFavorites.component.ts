import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from '../../store/actions'

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss']
})
export class AddToFavoriteComponent {
  @Input()
  isFavorited!: boolean
  @Input()
  favoritesCount!: number
  @Input()
  articleSlug!: string

  constructor(private store: Store) { }


  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug
      })
    )
  }
}

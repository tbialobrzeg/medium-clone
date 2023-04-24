import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AddToFavoriteComponent} from 'src/app/add-to-favorites/components/addToFavorites/addToFavorites.component'
import {AddToFavoritesService} from 'src/app/add-to-favorites/services/add-to-favorites.service'
import {EffectsModule} from '@ngrx/effects'
import {AddToFavoritesEffect} from './store/effects'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoritesService]
})
export class AddToFavoriteModule {}

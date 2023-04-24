import {CurrentUserInterface} from 'src/app/auth-pages/types/current-user.interface'

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string
}

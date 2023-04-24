import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backend-errors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss']
})
export class BackendErrorsComponent implements OnChanges {

  @Input()
  backendErrors!: BackendErrorsInterface | null;

  errorMessages: string[] = [];

  ngOnChanges(): void {
    if (this.backendErrors == null) return;
    this.errorMessages = Object.keys(this.backendErrors!).map(name => {
      let messages = this.backendErrors![name].join(", ");
      return `${name} ${messages}`
    })
  }


}

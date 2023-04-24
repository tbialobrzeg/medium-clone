import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { ArticleInputInterface } from 'src/app/article-page-show/types/article-input.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
  //changeDetection : ChangeDetectionStrategy.OnPush
})
export class ArticleFormComponent implements OnInit {
  @Input()
  initialValues!: ArticleInputInterface
  @Input()
  isSubmitting!: boolean
  @Input()
  errors!: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>()

  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValues?.title || "",
      description: this.initialValues?.description || "",
      body: this.initialValues?.body || "",
      tagList: this.initialValues?.tagList.join(' ') || ""
    })
  }

  onSubmit(): void {
    let formData: ArticleInputInterface = {
      title: this.form.value.title,
      description: this.form.value.description,
      body: this.form.value.body,
      tagList: this.form.value.tagList.split(' ')
    }
    this.articleSubmitEvent.emit(formData);
  }
}


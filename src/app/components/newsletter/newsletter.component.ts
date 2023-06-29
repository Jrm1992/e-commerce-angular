import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.form.get('email');
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    document.querySelector('.modal-container')?.classList.remove('hidden');
    this.reset();
  }

  reset() {
    this.form.reset();
  }
}

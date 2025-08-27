import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  email = '';
  message = '';

  constructor(private api: ApiService) {}

  submit() {
    this.api
      .post('auth/forgot-password', { email: this.email })
      .subscribe(() => {
        this.message = 'Password reset email sent.';
      });
  }
}

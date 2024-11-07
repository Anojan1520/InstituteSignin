import { Component } from '@angular/core';
import { RegistrationComponent } from '../../auth/registration/registration.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}

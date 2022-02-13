import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/auth/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.form = this.formService.initializeRegisterForm(this.form);
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

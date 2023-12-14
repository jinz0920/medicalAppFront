import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) {
    this.myForm = this.fb.group({
      gender: new FormControl(''),
      lastName: new FormControl(''),
      firstName: new FormControl(''),
      cin: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      birthdate: new FormControl(''),
      password: new FormControl(''),
    });
  }
  selectedRole = '';
  setValue(value: string): void {
    this.selectedRole = value;
  }
  async onSubmit() {
    const formData = this.myForm.value;
    const apiUrlMedecin = 'api/medecin/add';
    const apiUrlPatient = 'api/patient/add';
    if (formData.cin) {
      axios.post(apiUrlMedecin, formData)
      .then(function (response: any) {
        console.log(response);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('role', response.data.role);
        window.location.href = '#/dashbord';
      })
      .catch(function (error: any) {
        console.log('medecin ',error);
      });
    } else {
      axios.post(apiUrlPatient, formData)
      .then(function (response: any) {
        console.log(response);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('role', response.data.role);
        window.location.href = '#/dashbord';
      })
      .catch(function (error: any) {
        console.log('patient ',error);
      });
    }
  }
}

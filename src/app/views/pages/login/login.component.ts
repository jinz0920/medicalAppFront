import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm: FormGroup;
  visible = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  async onSubmit() {
    const formData = this.myForm.value;
    const apiUrlMedecin = 'api/medecin/login';
    const apiUrlPatient = 'api/patient/login';
    let res = null;
    try {
      this.visible = false;
      const response = await axios.post(apiUrlPatient, formData);
      console.log(response);
      localStorage.setItem('id', response.data.id);
      localStorage.setItem('role', response.data.role);
      res = await response.data;
      this.router.navigate(['theme/colors']);
    } catch (error: any) {}

    if (res == null) {
      try {
        console.log(res);
        const response = await axios.post(apiUrlMedecin, formData);
        console.log(response);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('role', response.data.role);
        res = response.data;
        this.router.navigate(['/dashbord']);
      } catch (error: any) {
        console.log('medecin', error);
        this.visible = true;
      }
    }
  }
}

import { Component } from '@angular/core';
import { SharedValueService } from './shared-value.service';
import axios from 'axios';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent {
  sharedValue: number = 0;
  idPatient = localStorage.getItem('id');
  doctor: any = {};
  patient: any = {};
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sharedValueService: SharedValueService
  ) {
    this.sharedValueService.sharedValue$.subscribe(
      (value: number) => (this.sharedValue = value)
    );
    this.myForm = this.fb.group({
      date: new FormControl(''),
      hour: new FormControl(''),
      typofillness: new FormControl(''),
      description: new FormControl(''),
      medecin: new FormControl({}),
      patient: new FormControl({}),
    });
  }

  ngOnInit(): void {
    this.fetchDataMedecinById();
    this.fetchDataPatientById();
  }

  async fetchDataMedecinById() {
    const apiUrl = `/api/medecin/get/${this.sharedValue}`;
    const response = await axios.get(apiUrl);
    this.doctor = await response.data;

    console.log(this.doctor);

    this.myForm.patchValue({
      medecin: this.doctor,
    });
  }

  async fetchDataPatientById() {
    const apiUrl = `/api/patient/get/${this.idPatient}`;
    const response = await axios.get(apiUrl);
    this.patient = await response.data;
    console.log(this.patient);

    this.myForm.patchValue({
      patient: this.patient,
    });
  }

  async onSubmit() {
    const apiUrl = `/api/appointement/add`;
    const response = await axios.post(apiUrl, this.myForm.value);
    if (response.data) {
      window.location.href = '#/theme/colors';
    }
  }
}

import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  private id = localStorage.getItem('id');
  public consu: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fetchDataRDVByIdPatient();
  }

  async fetchDataRDVByIdPatient() {
    const apiUrl = `/api/appointement/listpatient/${this.id}`;
    const response = await axios.get(apiUrl);
    this.consu = response.data;
    console.log(this.consu)
  }

  handleClick(id: number) {
    window.location.href = '#/theme/typography#someAnchor';
  }
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SharedValueService } from './shared-value.service';

@Component({
  templateUrl: './rdv-medecin.component.html',
})
export class RdvMedecinComponent implements OnInit {
  constructor(private sharedValueService: SharedValueService) {}
  public rdv: any[] = [];
  private idMedecin = localStorage.getItem('id');
  ngOnInit(): void {
    this.fetchDataRdvByIdMedecin();
  }

  async fetchDataRdvByIdMedecin() {
    const apiUrl = `/api/appointement/listmedecin/${this.idMedecin}`;
    const response = await axios.get(apiUrl);
    this.rdv = await response.data;
    console.log(response.data);
  }

  handleClick(id: number) {
    this.sharedValueService.updateSharedValue(id);
    window.location.href = '#/theme/detailRdv';
  }
}

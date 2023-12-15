import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SharedValueService } from './shared-value.service';

@Component({
  templateUrl: './detail-rdv.component.html',
})
export class DetailRdvComponent implements OnInit {
  sharedValue: number = 0;
  public detailRdv: any = {};
  constructor(private sharedValueService: SharedValueService) {
    this.sharedValueService.sharedValue$.subscribe(
      (value: number) => (this.sharedValue = value)
    );
  }
  ngOnInit(): void {
    this.fetchDataDetailRdv();
  }

  async fetchDataDetailRdv() {
    const apiUrl = `/api/appointement/get/${this.sharedValue}`;
    const response = await axios.get(apiUrl);
    this.detailRdv = await response.data;
    console.log(response.data);
  }
}

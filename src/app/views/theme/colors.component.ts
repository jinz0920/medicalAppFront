import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SharedValueService } from './shared-value.service';

@Component({
  templateUrl: 'colors.component.html',
})
export class ColorsComponent implements OnInit {
  public users: any[] = [];
  constructor(private sharedValueService: SharedValueService) {}

  ngOnInit(): void {
    this.fetchDataListMedecin();
  }

  async fetchDataListMedecin() {
    const apiUrl = '/api/medecin/list';
    const response = await axios.get(apiUrl);
    this.users = await response.data;
    console.log(this.users);
  }

  handleClick(id: number) {
    this.sharedValueService.updateSharedValue(id);
    window.location.href = '#/theme/typography#someAnchor';
  }
}

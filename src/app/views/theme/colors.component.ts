import { Component, Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

@Component({
  templateUrl: 'colors.component.html',
})
export class ColorsComponent implements OnInit {
  public users: any[] = [];

  private sharedValueSource = new BehaviorSubject<number>(0);
  sharedValue$ = this.sharedValueSource.asObservable();

  updateSharedValue(newValue: number) {
    this.sharedValueSource.next(newValue);
  }
  ngOnInit(): void {
    this.fetchDataListMedecin();
  }

  async fetchDataListMedecin() {
    const apiUrl = '/api/medecin/list';
    const response = await axios.get(apiUrl);
    this.users = await response.data;
    console.log(this.users);
  }
}

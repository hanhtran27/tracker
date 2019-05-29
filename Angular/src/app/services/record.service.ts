import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private postRecordUrl = 'http://localhost:8080/record';
  private getRecordsByGoalIdUrl = 'http://localhost:8080/records/goal/'

  constructor(private http: HttpClient) { }

  addRecord(record: Record): Observable<Record> {
    return this.http.post<Record>(this.postRecordUrl, record);
  }

  getRecordsByGoalId(goalId: string): Observable<Record []> {
    return this.http.get<Record []>(this.getRecordsByGoalIdUrl + goalId);
  }
}

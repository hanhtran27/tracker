import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goal } from '../models/goal.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GoalService {

  private getGoalUrl = 'http://localhost:8080/goals';
  private postGoalUrl = 'http://localhost:8080/goal';

  //inject HttpClient
  constructor(private http: HttpClient) { }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.getGoalUrl)
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.postGoalUrl, goal)
  }
}

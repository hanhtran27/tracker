import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goal } from '../models/goal.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class GoalService {

  private getGoalsUrl = 'http://localhost:8080/goals';
  private getGoalUrl = 'http://localhost:8080/goal/';
  private postGoalUrl = 'http://localhost:8080/goal';
  private deleteGoalUrl = 'http://localhost:8080/goal/';
  private updateGoalUrl = 'http://localhost:8080/goal/';
  

  //inject HttpClient
  constructor(private http: HttpClient) { }

  // pass token to header after login            
  // httpOptions() {
  //   return {
  //     headers: new HttpHeaders({
  //       'authorization': this.authService.getToken()
  //     })
  //   }
  // }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.getGoalsUrl);
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.postGoalUrl,goal);
  }

  deleteGoal(goalId: string): Observable<{}> {
    return this.http.delete(this.deleteGoalUrl + goalId);
  }

  updateGoal(goal: Goal): Observable<{}> {
    return this.http.put(this.updateGoalUrl + goal._id, goal);
  }

  getGoalById(goalId: string): Observable<Goal> {
    return this.http.get<Goal>(this.getGoalUrl + goalId);
  }
}


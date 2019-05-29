import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goal } from '../models/goal.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class GoalService {

  private getGoalUrl = 'http://localhost:8080/goals';
  private postGoalUrl = 'http://localhost:8080/goal';
  private deleteGoalUrl = 'http://localhost:8080/goal/';
  private updateGoalUrl = 'http://localhost:8080/goal/';

  //inject HttpClient
  constructor(private http: HttpClient,
              private authService: AuthService) { }

  // pass token to header after login            
  httpOptions() {
    return {
      headers: new HttpHeaders({
        'authorization': this.authService.getToken()
      })
    }
  }

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.getGoalUrl,this.httpOptions());
  }

  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.postGoalUrl, goal,this.httpOptions());
  }

  deleteGoal(goalId: string): Observable<{}> {
    return this.http.delete(this.deleteGoalUrl + goalId);
  }

  updateGoal(goal: Goal): Observable<{}> {
    return this.http.put(this.updateGoalUrl + goal._id, goal);
  }
}


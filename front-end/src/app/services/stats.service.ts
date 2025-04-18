import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the StatWidget interface here to avoid circular imports
export interface StatWidget {
  name: string;
  count: string | number;
  icon: string;
  color: string;
  highlight: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  // Hardcode base URL for now, will be dynamic in production
  private apiUrl = 'http://localhost:3000/api/stats';

  constructor(private http: HttpClient) { }

  /**
   * Get stats data from API
   * @returns Observable with array of StatWidget data
   */
  getStats(): Observable<StatWidget[]> {
    return this.http.get<StatWidget[]>(this.apiUrl);
  }
}

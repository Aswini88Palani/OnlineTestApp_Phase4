import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript Quiz',
        description:
          "To test your knowledge. This is a basic level quiz. It contains 10 Questions.",
        imageUrl: 'assets/images/JS.png',
      }
    ];
  }
}

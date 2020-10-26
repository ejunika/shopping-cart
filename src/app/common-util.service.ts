import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

  constructor() { }

  greet(name: string): string {
    return `Hello ${name}`;
  }

}

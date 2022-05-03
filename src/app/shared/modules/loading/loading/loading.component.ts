import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <figure>
      <div class="dot white"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </figure>
  `,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {}

import { Component, Input, OnInit } from '@angular/core';

@Component({ //decorador
  selector: 'app-button',
  templateUrl: './button.component.html',
  // templateUrl: ``,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color!:string;
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

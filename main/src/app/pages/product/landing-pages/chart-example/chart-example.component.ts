import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  data = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    },
    {
      'name': 'France',
      'value': 7200000
    },
      {
      'name': 'UK',
      'value': 6200000
    }
  ];
  view: any[] = [700, 400];
  gradient = false;
  showLegend = false;
  showLabels = false;
  isDoughnut = true;
  legendPosition = 'below';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.component.html',
  styleUrls: ['./cal-modal.component.css']
})
export class CalModalComponent implements OnInit {
  data = [{
    'name': 'Your seeing on averarage',
    'value': 260
  },
  {
    'name': 'You present an average',
    'value': 87
  },
  {
    'name': 'Your Target',
    'value': 43
  }];
  view: any[] = [300, 300];
  gradient = false;
  showLegend = false;
  showLabels = false;
  isDoughnut = true;
  legendPosition = 'below';
  colorScheme = {
    domain: ['#5E17EB', '#8C52FF', '#CB6CE6']
  };
  public selected;
  public dent_num;
  public pat_num;
  public day_num;
  public plan_num;
  public pat;
  public treat;
  public your;
  constructor() { }

  ngOnInit() {

    this.selected = 123;
    this.dent_num = 1;
    this.day_num = 5;
    this.pat_num = 4;
    this.plan_num = 12;
    this.pat = 260;
    this.treat = 87;
    this.your = 43;
  }
  select(event: any) {
    this.selected = event.target.value;
    if (this.selected === 321) {
      this.data = [{
        'name': 'Your seeing on averarage',
        'value': 260
      },
      {
        'name': 'You present an average',
        'value': 87
      },
      {
        'name': 'Your Target',
        'value': 43
      }];
    }
  }
  onChangeDent(event: any) {
    this.dent_num = event.target.value;
    this.changeData();
  }
  onInputDent(event: any) {
    this.dent_num = event.value;
    this.changeData();
  }
  onChangeDay(event: any) {

    this.day_num = event.target.value;
    this.changeData();
  }
  onInputDay(event: any) {
    this.day_num = event.value;
    this.changeData();
  }
  onChangePat(event: any) {

    this.pat_num = event.target.value;
    this.changeData();
  }
  onInputPat(event: any) {
    this.pat_num = event.value;
    this.changeData();
  }
  onChangePlan(event: any) {

    this.plan_num = event.target.value;
    this.changeData();
  }
  onInputPlan(event: any) {
    this.plan_num = event.value;
    this.changeData();
  }
  changeData() {
    this.pat = Math.floor(this.dent_num * this.day_num * this.pat_num * 52 / 12);
    this.treat = Math.floor(this.dent_num * this.day_num * this.plan_num * 52 / 12);
    this.your = Math.floor(this.treat / 2);
    this.data = [
      {
        'name': 'Your seeing on averarage',
        'value': this.pat
      },
      {
        'name': 'You present an average',
        'value': this.treat
      },
      {
        'name': 'Your Target',
        'value': this.your
      }
    ]
  }
}

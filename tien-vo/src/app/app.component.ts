import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tien-vo';

  
  ngOnInit() {
  }

  get_years_of_experience() {
    const current_year = new Date().getFullYear();
    return (current_year - 2016);
  }

  open_page(website: string ) {
    const website_mapping: {[key: string]: any} = {
      guaranteed_rate: 'https://www.rate.com/',
      loanDepot: 'https://www.loandepot.com/',
      wolin_design_group: 'https://wdgcorp.com/',
    };
    console.log(website_mapping[website]);
    window.open(website_mapping[website]);
  }
}

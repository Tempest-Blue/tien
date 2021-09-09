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
      loan_depot: 'https://www.loandepot.com/',
      wolin_design_group: 'https://wdgcorp.com/',
      lambda: 'https://aws.amazon.com/lambda/',
      dynamo_db: 'https://aws.amazon.com/dynamodb/',
      api_gateway: 'https://aws.amazon.com/api-gateway/',
    };
    window.open(website_mapping[website]);
  }
}

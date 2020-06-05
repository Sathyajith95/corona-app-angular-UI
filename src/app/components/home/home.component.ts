import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  countries: string[] = [
    'US','Spain','Italy','India','UK','Russia','France','Germany','Brazil','Turkey','Iran',
'China','Canada','Peru','Belgium','Netherlands','Saudi-Arabia','Ecuador','Switzerland',
'Mexico','Portugal','Pakistan','Chile','Sweden','Ireland','Singapore','Belarus','Qatar','United-Arab-Emirates',
'Israel','Austria','Japan','Poland','Romania','Ukraine','Bangladesh','Indonesia','South-Korea','Philippines',
'Denmark','Serbia','Colombia','Egypt','South Africa','Norway','Panama',
'Kuwait','Australia','Malaysia','Finland','Morocco','Argentina',
'Afghanistan','Nigeria','Hungary','Oman','Ghana','Thailand','Greece','Iraq',
'Cameroon','Croatia','Bolivia','Bulgaria','Iceland','Cuba','New-Zealand'
  ];
  countrySelectedFlag: boolean = false;
  countrySelected;
  coronaData = {
    coronaVirusCases: '',
    deaths: '',
    recovered: '',
    activeCases: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSelected(event: MatSelect) {
    this.countrySelected = event;
    this.apiService.getCoronaData(this.countrySelected)
    .subscribe((data) => {
      this.coronaData = {
        coronaVirusCases : data['Coronavirus Cases'],
        deaths: data['Deaths'],
        recovered: data['Recovered'] === 'NaN' ? 'Not Available' : data['Recovered'],
        activeCases: data['Active Cases'] === 'NaN'? 'Not Available': data['Active Cases']
      }
      console.log(this.coronaData);
    });
    this.countrySelectedFlag = true;
  }

}

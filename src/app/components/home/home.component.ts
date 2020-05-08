import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: string[] = [
    'US','Spain','Italy','India','UK','Russia','France','Germany','Brazil','Turkey','Iran',
'China','Canada','Peru','Belgium','Netherlands','Saudi Arabia','Ecuador','Switzerland',
'Mexico','Portugal','Pakistan','Chile','Sweden','Ireland','Singapore','Belarus','Qatar','UAE',
'Israel','Austria','Japan','Poland','Romania','Ukraine','Bangladesh','Indonesia','South-Korea','Philippines',
'Denmark','Serbia','Colombia','Egypt','South Africa','Norway','Panama',
'Kuwait','Australia','Malaysia','Finland','Morocco','Argentina',
'Afghanistan','Nigeria','Hungary','Oman','Ghana','Thailand','Greece','Iraq',
'Cameroon','Croatia','Bolivia','Bulgaria','Iceland','Cuba','New-Zealand'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

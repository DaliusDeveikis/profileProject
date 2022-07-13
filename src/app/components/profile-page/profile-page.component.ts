import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public UserFullName:string = 'Dalius Deveikis'
  public UserInfo:string = 'JavaScript Developer'
  public UserAbout:string = "Hello, I'm learning programming for the second year, I don't have much experience in official companies, I'm trying to improve myself. I am looking for a job, and I am also interested in an internship. I never give up, so I devote all my time to programming. 🤓 🌍 "
  public canEditCode = false

  constructor() { }

  ngOnInit(): void {
  }

  
}

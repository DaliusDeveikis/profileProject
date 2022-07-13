import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilePageService } from 'src/app/services/profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  animations: [
    trigger('animes', [
      state('rightMove', style({
        "border-radius": "61% 39% 28% 72% / 67% 6% 94% 33%",
        "box-shadow": "-9px 13px 14px 2px rgba(0,0,0,0.6)"
      })),
      state('leftMove', style({
        "border-radius": "13% 78% 12% 90% / 42% 36% 44% 73%",
        "box-shadow": "-9px 20px 16px 7px rgba(0,0,0,0.71)"
      })),
      transition('leftMove => rightMove', [
        animate('2000ms ease-out')
      ]),
      transition('rightMove => leftMove', [
        animate('2000ms ease-in')

      ])
    ])
  ]
})
export class ProfilePageComponent implements OnInit {

  public profileForm: FormGroup

  public UserFullName:string = 'Dalius Deveikis'
  public UserInfo:string = 'JavaScript Developer'
  public UserAbout:string = "Hello, I'm learning programming for the second year, I don't have much experience in official companies, I'm trying to improve myself. I am looking for a job, and I am also interested in an internship. I never give up, so I devote all my time to programming. 🤓 🌍 "
  public canEditCode = false
  public anime = 'rightMove'

  constructor(
    private profilePageService: ProfilePageService
    ) {
      this.profileForm = new FormGroup({

        userFullName: new FormControl(null, Validators.required),
        userInfo: new FormControl(null, Validators.required),
        userAbout: new FormControl(null, Validators.required),
      })
   }

  ngOnInit(): void {
  }

  public animations() {
    this.anime = (this.anime === 'leftMove' ? 'rightMove' : 'leftMove')
  }

  public addProfile() {
    if (this.profileForm != null) {
      this.profilePageService.addProfile(this.profileForm.value).subscribe(()=> {
        this.canEditCode = false
      })
    }
  }

  
}

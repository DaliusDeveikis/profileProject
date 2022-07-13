import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {

  private readonly url = environment.dbUrl

  constructor(private http: HttpClient) { }

  public addProfile(profile: Profile) {
    return this.http.post(this.url + 'profile.json', profile)
  }
}

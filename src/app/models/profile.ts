export interface Experience {
  name: string;
  discription:string;
  url:string
}

export class Profile {
  id?:string = '';
  userFullName:string = 'Dalius Deveikis';
  userInfo:string = 'JavaScript Developer';
  userAbout:string = "Hello, I'm learning programming for the second year, I don't have much experience in official companies, I'm trying to improve myself. I am looking for a job, and I am also interested in an internship. I never give up, so I devote all my time to programming. 🤓 🌍 "
  // experience: Experience[] = []
}
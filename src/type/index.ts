export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Experience {
  id: string;
  companyname: string;
  title: string;
  jobdescripetion: string;
  startdate: string;
  enddate: string;
  present: boolean;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  githublink: string;
  livedemo: string;
}

export interface SocialMedia {
  name: string;
  link: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  image: string;
  herotitle: string;
  logo: string;
  github: string;
  email: string;
  aboutMe: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  soicalmedia: SocialMedia[];
}

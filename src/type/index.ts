interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface Experience {
  id: string;
  companyname: string;
  title: string;
  employmenttype: string;
  jobdescripetion: string;
  startdate: string;
  enddate: string;
  present: boolean;
}

interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  githublink: string;
  livedemo: string;
}

interface SocialMedia {
  name: string;
  link: string;
  icon: string;
}

interface Profile {
  name: string;
  title: string;
  image: string;
  herotitle: string;
  logo: string;
  githubLink: string;
  email: string;
  aboutMe: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  soicalmedia: SocialMedia[];
}

export default Profile;

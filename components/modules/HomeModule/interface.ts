export interface UserBoxData {
  name: string
  description: string
  imageUrl: string
  contacts: {
    name: string
    url: string
  }[]
  educations: EducationHistory[]
  experience: ExperienceHistory[]
  projects: ProjectHistory[]
}

export interface GeneralDataResponse {
  name: string
  description: string
  image_url: string
}

export interface ContactResponse {
  platform_name: string
  url: string
}

export interface EducationsResponse {
  degree: string
  field: string
  start_date: string
  end_date: string | null
  affiliation: {
    name: string
    image_url: string
  }
}

export interface EducationHistory {
  affiliationName: string
  affiliationImage: string
  degree: string
  field: string
  startDate: Date
  endDate: Date | null
}

export interface ExperienceResponse {
  name: string
  image_url: string
  positions: {
    position: string
    skills: string[]
    description: string
    start_date: string
    end_date: string | null
  }[]
}

export interface ExperienceHistory {
  affiliation: string
  image: string
  positions: {
    name: string
    description: string
    skills: string[]
    startDate: Date
    endDate: Date | null
  }[]
}

export interface ProjectsResponse {
  name: string
  description: string
  image_url: string
  project_urls: {
    name: string
    url: string
  }[]
}

export interface ProjectHistory {
  name: string
  image: string
  description: string
  urls: {
    name: string
    url: string
  }[]
}

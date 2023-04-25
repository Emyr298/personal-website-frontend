export interface UserBoxData {
  name: string,
  imageUrl: string,
  contacts: {
    name: string,
    url: string,
  }[],
}

export interface GeneralDataResponse {
  name: string,
  description: string,
  image_url: string,
}

export interface ContactResponse {
  platform_name: string,
  url: string,
}

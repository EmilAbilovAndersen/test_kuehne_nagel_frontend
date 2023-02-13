export interface City {
  id: string;
  name: string;
  photoUrl?: string;
}

export interface CityPage {
  data: City[];
  total: number;
  page: number;
  pageNumber: number;
}

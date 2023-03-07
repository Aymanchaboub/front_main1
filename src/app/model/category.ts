import { SousCategorie } from "./souscategory";

export interface Category {
  id: number;
  nom: string;
  image: File;
  souscategories: SousCategorie[];
}
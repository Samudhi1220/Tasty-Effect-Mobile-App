export interface CategoryTypes {
  id: string;
  name: string;
  photo_url: string;
  recipesCount: string;
  recipes: { id: string;
    title: string;
    image: string;
    description: string;}[];
}


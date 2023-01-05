export interface Product {
  id: number;
  active: boolean;
  picture: {
    id: number;
    src: string;
    className: string;
    alt: string;
  };
  brand: number;
  title: string;
  description: string;
  price: string;
  offerDiscount: boolean;
  shipping: boolean;
  levelStars: number;
  stock: number;
  publicationDate: string;
  inCart: number;
}

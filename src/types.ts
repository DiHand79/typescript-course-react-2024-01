export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: {
    url: string;
    title: string;
  }[];
  warehouse: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    name: string;
    phoneNumbers: string[];
  };
}

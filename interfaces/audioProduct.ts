interface IncludedItem {
  quantity: number;
  item: string;
}

type ProductCategory = 'headphones' | 'speakers' | 'earphones';

interface ImageGallery {
  first: string;
  second: string;
  third: string;
}

interface SiblingsProduct {
  slug: string;
  name: string;
  image: string;
}

interface ProductDetails {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  categoryImage: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: ImageGallery;
  others: SiblingsProduct[];
  relatedCategories: SiblingsProduct[];
}

interface ProductItem {
  image?: string;
  name: string;
  price: number;
  quantity: number;
}

interface cartItem {
  items: ProductItem[];
  itemsPrice: number;
  shippingCost: number;
  VatCost: number;
  totalPrice: number;
}

export { ProductDetails, cartItem, ProductItem, SiblingsProduct, ProductCategory };

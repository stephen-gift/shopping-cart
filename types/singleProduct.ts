export interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export interface Product {
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: string[] | null;
  unavailable: boolean;
  unavailable_start: string | null;
  unavailable_end: string | null;
  id: string;
  parent_product_id: string | null;
  parent: any; // Assuming parent could be of any type
  organization_id: string;
  product_image: any[]; // Array of any type since details are not fully specified
  categories: any[]; // Array of any type since details are not fully specified
  date_created: string;
  last_updated: string;
  user_id: string;
  photos: Photo[];
  current_price: Array<{
    NGN: [number, number | null, any[]];
  }>;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: number | null;
  discounted_price: number | null;
  buying_price: number | null;
  extra_infos: any[]; // Array of any type since details are not fully specified
}

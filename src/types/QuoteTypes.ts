export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuoteFormData {
  text: string;
  author: string;
  category: string;
}

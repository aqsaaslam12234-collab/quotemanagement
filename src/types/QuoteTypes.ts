export interface Quote {
  id: string;
  quoteId: string;
  quote: string;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface QuoteFormData {
  quote: string;
  author: string;
}


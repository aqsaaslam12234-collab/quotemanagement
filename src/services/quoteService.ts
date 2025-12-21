import axios from "axios";
import type { Quote, QuoteFormData } from "../types/QuoteTypes";

const API_URL = "http://localhost:5000/api/quotes";

const quoteService = {
  getAllQuotes: async (): Promise<Quote[]> => {
    const response = await axios.get(API_URL);
    return response.data.data;
  },

  getQuoteById: async (id: string): Promise<Quote> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  },

  createQuote: async (quoteData: QuoteFormData): Promise<Quote> => {
    const response = await axios.post(API_URL, quoteData);
    return response.data.data;
  },

  updateQuote: async (id: string, quoteData: QuoteFormData): Promise<Quote> => {
    const response = await axios.put(`${API_URL}/${id}`, quoteData);
    return response.data.data;
  },

  deleteQuote: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};

export default quoteService;

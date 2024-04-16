import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface BookState {
  books: Book[];
}

const initialState: BookState = {
  books: [],
};

export const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>): void => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<{
      id: number
    }>): void => {
      state.books = state.books.filter((book): boolean => book.id !== action.payload.id);
    },
    editBook: (state, action: PayloadAction<Book>): void => {
      state.books.map((item): void => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.price = action.payload.price;
          item.category = action.payload.category;
          item.description = action.payload.description;
        }
      });
    }
  }
});

export const { addBook, deleteBook, editBook } = BookSlice.actions;
export default BookSlice.reducer;

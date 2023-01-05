import { LocalstorageTypes } from "@/models";
import { Person } from "@/models/people";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

const initialStateTest = () => {
  const localStorageData = getLocalStorage(LocalstorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalstorageTypes.FAVORITES) as string)
    : initialState;

  return localStorageData;
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: initialStateTest(),
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalstorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id != action.payload.id
      );
      setLocalStorage(LocalstorageTypes.FAVORITES, filteredState);
      return filteredState;
    },
  },
});
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;

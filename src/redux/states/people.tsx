import { LocalstorageTypes } from "@/models";
import { Person } from "@/models/people";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: [
    {
      id: "1",
      name: "111",
      category: "111",
      company: "111",
    },
    {
      id: "1",
      name: "111",
      category: "111",
      company: "111",
    },
    {
      id: "1",
      name: "111",
      category: "111",
      company: "111",
    },
  ],
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalstorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});
export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;

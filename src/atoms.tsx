import { atom } from "recoil";
import { selector } from "recoil";


interface ITodoState {
  [key:string] : string[];
}

export const toDoState = atom<ITodoState>({
  key:"toDo",
  default:{
    "To Do":["a","b",],
    Doing:["c","d","e"],
    Done:["f"],
  }
})



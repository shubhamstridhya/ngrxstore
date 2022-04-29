import { createReducer } from "@ngrx/store";
import { initialState } from "src/app/counter/state/counter.state";

const _postReducer = createReducer(initialState)
export function postsReducer(state:any, action:any){
 return _postReducer(state, action);
}

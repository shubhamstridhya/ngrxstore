import { counterReducer } from "../counter/state/counter.reducer";
import { postsReducer } from "../post/postlist/state/posts.reducer";
import { PostsState } from "../post/postlist/state/posts.state";

export interface AppState{
posts :PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts : postsReducer
}

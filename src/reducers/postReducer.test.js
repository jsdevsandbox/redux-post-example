import { FETCH_POSTS, NEW_POST } from "../actions/types";
import postReducer from "./postReducer";

describe("Post Reducer Unit Tests", () => {
  it("should return newState that is the same as initial state with no actions", () => {
    const initialState = {
      items: [],
      item: {}
    };
    const newState = postReducer(initialState, {});
    expect(newState.items).toEqual([]);
    expect(newState.item).toEqual({});
  });

  it("should generate new state when action type is FETCH_POSTS", () => {
    const initialState = {
      items: [],
      item: {}
    };
    const posts = [
      { title: "Post 1", id: "1", body: "this is the body of Post 1" },
      { title: "Post 2", id: "2", body: "this is the body of Post 2" }
    ];
    const newState = postReducer(initialState, {
      type: FETCH_POSTS,
      payload: posts
    });

    expect(newState.items).toEqual(posts);
    expect(newState.item).toEqual({});
  });

  it("should generate new state when action type is NEW_POST", () => {
    const initialState = {
      items: [],
      item: {}
    };
    const post = [
      { title: "Post 11", id: "11", body: "this is the body of Post 11" }
    ];
    const newState = postReducer(initialState, {
      type: NEW_POST,
      payload: post
    });
    expect(newState.item).toEqual(post);
    expect(newState.items).toEqual([]);
  });

  it("should return default state with no initial state and no action", () => {
    const newState = postReducer(undefined, {});
    expect(newState.items).toEqual([]);
    expect(newState.item).toEqual({});
  });
});

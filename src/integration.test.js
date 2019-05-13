import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { FETCH_POSTS, NEW_POST } from "./actions/types";
import { fetchPosts, createPost } from "./actions/postActions";
import store from "./store";
import fetchMock from "fetch-mock";

describe("Integration Tests for Redux Store", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should update state in store", () => {
    // fetchPosts()
    let expectedResponse = {
      posts: {
        item: {},
        items: { body: "this is the body of Post 1", id: "1", title: "Post 1" }
      }
    };

    store.dispatch({
      type: FETCH_POSTS,
      payload: {
        title: "Post 1",
        id: "1",
        body: "this is the body of Post 1"
      }
    });

    expect(store.getState()).toEqual(expectedResponse);

    // createPost()
    expectedResponse = {
      posts: {
        item: { body: "this is the body of Post 2", id: "2", title: "Post 2" },
        items: { body: "this is the body of Post 1", id: "1", title: "Post 1" }
      }
    };

    store.dispatch({
      type: NEW_POST,
      payload: {
        title: "Post 2",
        id: "2",
        body: "this is the body of Post 2"
      }
    });

    expect(store.getState()).toEqual(expectedResponse);
  });
});

// need to finish this test
describe("redux integration tests using fetch-mock -- need to finish this", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  let expectedResponse = {
    posts: {
      item: {},
      items: { body: "this is the body of Post 1", id: "1", title: "Post 1" }
    }
  };

  it("should return new state from the store", async () => {
    fetchMock.mock(
      "https://jsonplaceholder.typicode.com/posts",
      200,
      expectedResponse
    );
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    store.dispatch(fetchPosts());
    const newState = store.getState();
    expect(newState).toEqual(expectedResponse);
  });
});

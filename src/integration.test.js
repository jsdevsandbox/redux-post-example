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
    const expectedResponse = [{ title: "title1", body: "body text 1" }];
    fetchMock.mock(
      "https://jsonplaceholder.typicode.com/post",
      expectedResponse
    );

    // need to figure this out later
  });
});

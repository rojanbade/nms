export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

export const deleteDataRequest = () => ({
  type: "DELETE_DATA_REQUEST",
});

export const fetchPostsRequest = () => ({
  type: "FETCH_POSTS_REQUEST",
});

export const fetchPostsSuccess = (data) => ({
  type: "FETCH_POSTS_SUCCESS",
  payload: data,
});

export const fetchPostsFailure = (error) => ({
  type: "FETCH_POSTS_FAILURE",
  payload: error,
});

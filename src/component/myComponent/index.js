//components/myComponents.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataRequest,
  fetchDataRequest,
  fetchPostsRequest,
} from "../../redux/actions";

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.data);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    // dispatch(fetchDataRequest());
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const handleDeleteData = () => {
    dispatch(deleteDataRequest());
  };

  return (
    <div className="app-container">
      <h1>Redux Saga App</h1>
      <div className="data-container">
        {data ? (
          <div className="data">{JSON.stringify(data)}</div>
        ) : (
          <div className="loading">
            {error ? `Error: ${error}` : "Loading data..."}
          </div>
        )}
      </div>
      <button
        className="fetch-button"
        onClick={() => dispatch(fetchDataRequest())}
      >
        Fetch Data
      </button>
      <button className="delete-button" onClick={handleDeleteData}>
        Delete Data
      </button>
    </div>
  );
};

export default MyComponent;

import React from 'react'
import { useGetPosts } from '../../hooks/useGetPosts';
import useDelayedLoading from '../../hooks/useDelayedLoading';

import "./Posts.css"

const Posts = () => {


  const {data} = useGetPosts();

  const isLoading = useDelayedLoading();

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }
  
  
  const slicedData = data?.slice(0, 20);

  return (
    <div className="container">
      {slicedData?.map(item => (
        <div key={item.id} className="item">
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
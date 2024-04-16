import React from 'react'
import { useGetComments } from '../../hooks/useGetComments';
import useDelayedLoading from '../../hooks/useDelayedLoading';

import "./Comments.css";

const Comments = () => {

    const {data} = useGetComments();

    const isLoading = useDelayedLoading();

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    const slicedData = data?.slice(0, 20);

    

  return (
    <div className='container'>
        {
            slicedData?.map(item => (
                <div key={item.id} className='item'>
                    <div className='comments-id-name-wrapper'>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                    </div>
                    <p>{item.email}</p>
                    <p>{item.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Comments
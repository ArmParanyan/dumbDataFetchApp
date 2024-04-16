import React from 'react';
import { useGetImages } from '../../hooks/useGetImages';
import useDelayedLoading from '../../hooks/useDelayedLoading'; 

import "./Images.css";

const Images = () => {
    const { data } = useGetImages();
    const isLoading = useDelayedLoading();

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    const slicedData = data?.slice(0, 20);

    return (
        <div className='image-container'>
            {slicedData?.map(item => (
                <div key={item.id} className='image-item'>
                    <div className='title-wrapper'>
                        <img src={item.thumbnailUrl} alt="" />
                        <p className='title'>{item.title}</p>
                    </div>
                    <img src={item.url} alt="" className='image'/>
                </div>
            ))}
        </div>
    );
}

export default Images;

import React from 'react'
import { useQuery } from 'react-query'
import { getImages } from '../apis/apis'

export const useGetImages = () => {
  return useQuery( {
    queryKey: ["images"],
    queryFn: () => {
        return getImages();
    }
  }
    
  )
}

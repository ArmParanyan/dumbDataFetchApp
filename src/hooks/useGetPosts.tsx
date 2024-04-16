import React from 'react'
import { useQuery } from 'react-query'
import { getPosts } from '../apis/apis'

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => {
        return getPosts();
    }
  })
}

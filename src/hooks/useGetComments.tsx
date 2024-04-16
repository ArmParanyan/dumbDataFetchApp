import React from 'react'
import { useQuery } from 'react-query'
import { getComments } from '../apis/apis'

export const useGetComments = () => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: () => {
        return getComments();
    }
  })
}

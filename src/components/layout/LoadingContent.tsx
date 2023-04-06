import React from 'react'
import { useAppSelector } from '@/store/hook'

export const LoadingContent = () => {
  const { loading } = useAppSelector(e => ({
    loading: e.system.loading
  }))

  return loading
    ? <div className='layout-content-loading'></div>
    : null
}

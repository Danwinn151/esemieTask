import React, { ReactNode } from 'react'
import Masonry from 'react-masonry-css'
import List from './user'

const breakPointObj = {
    default:4,
    3000:6,
    2000:5,
    1200:3,
    1000: 2,
    500: 1        
  }


interface ChildrenProps  {
  children: ReactNode
}
const MasonryLayout = ({children} : ChildrenProps) => {
  return (
    <Masonry className='flex animate-slide-fmd' breakpointCols={breakPointObj}>
       {children}
    </Masonry>
  )
}

export default MasonryLayout
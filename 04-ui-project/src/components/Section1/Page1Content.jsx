import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 items-center flex gap-17 h-[90vh] px-18'>
      <LeftContent />
      <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content
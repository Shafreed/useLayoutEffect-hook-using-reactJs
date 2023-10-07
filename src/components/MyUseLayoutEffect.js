import React, { useEffect, useLayoutEffect } from 'react'

const MyUseLayoutEffect = () => {

useLayoutEffect(()=>{
    console.log('useLayoutEffect called');
},[])
  return (
    <div>MyUseLayoutEffect</div>
  )
}

export default MyUseLayoutEffect
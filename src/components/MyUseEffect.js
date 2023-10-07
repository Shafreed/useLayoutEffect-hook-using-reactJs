import React from 'react'
import { useEffect } from 'react'

const MyUseEffect = () => {

    useEffect(()=>{
        console.log('useEffect called');
    },[])
  return (
    <div>MyUseEffect</div>
  )
}

export default MyUseEffect
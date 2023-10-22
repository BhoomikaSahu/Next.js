import { useRouter } from 'next/router'
import React from 'react'

const settings = () => {
    const router= useRouter()
    console.log(router);
  return (
    <div>
      This is settings page of {router.query.user}
    </div>
  )
}

export default settings

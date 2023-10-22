import { useRouter } from 'next/router'
import React from 'react'

const user = () => {
    const router = useRouter();
    console.log("router", router);
    return (
    <div>
      hello!! I am {router.query.user}
    </div>
  )
}

export default user

import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'

const Navbar = () => {
const session = useSession();
  return (
    <div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/blogs'>Blogs</Link>
      <Link href='/contact'>Contact</Link>
      {!session.data ? <button onClick={signIn}>Sign in</button> : <button onClick={signOut}>Sign out</button>}
    </div>
  )
}

export default Navbar

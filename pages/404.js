import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const errorPage = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 2000)
    },[])
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
      Page not found!
      <Link href="/">
        Back to Home
      </Link>
      <a onClick={()=> {router.push('/')}}>Back to homepage</a>
    </div>
  );
};

export default errorPage;

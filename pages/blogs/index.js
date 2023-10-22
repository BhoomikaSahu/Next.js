import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import Layout from '../../components/Layout';


export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    props : {
      data: data
  }}
}

const index = ({data}) => {
  const { data: session } = useSession()
  return (
    <>
      <Layout title='blogs'>
        Hello
        {
          data.slice(0, 5).map((blog) => {
            return (
              <div key={blog.id}>
                <h3>{blog.id}</h3>                
                <Link href={`/blogs/${blog.id}`}><h1>{blog.title}</h1></Link>
              </div>
            )
          })
        }
      </Layout>
    </>
  )
}
index.auth = true
export default index

import React from 'react'
import Layout from '../../components/Layout';

export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const paths = data.map((blog) => {
    return {
      params: {
        blogId: blog.id.toString(),
      },
    };
  });
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context) => {
  const id = context.params.blogId;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return{
    props:{
      data,
    }
  }
}

const myData = ({data}) => {    
  const {id, title, body} = data
  return (
    <Layout title='jfdfhud'>
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </Layout>
  )
}

export default myData;

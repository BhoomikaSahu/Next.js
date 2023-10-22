import Head from 'next/head';
import Navbar from './Navbar'
const Layout = ({children, title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout;

Layout.defaultProps = {
  title: 'Next.js Application'
}

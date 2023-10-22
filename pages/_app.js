import "../styles/globals.css";
// import {SessionProvider} from 'next-auth/react'

// function MyApp({ Component, pageProps }) {
//   return <SessionProvider session={pageProps.session}>
//     <Component {...pageProps} />
//   </SessionProvider>
// }

// export default MyApp

import { SessionProvider, useSession, signIn } from "next-auth/react";
import React from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log('component', Component.auth);
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return;
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ParallaxProvider } from 'react-scroll-parallax';

import Navbar from '@/components/navbar/navbar';
import ShapeDivider from '@/components/shape-divider/shapeDivider';
import Footer from '@/components/footer/footer';

import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={new QueryClient()}>
        <ParallaxProvider>

          <Navbar />
          <div id='back-to-top-anchor' style={{ marginBottom: "80px" }}></div>

          <Component {...pageProps} />

          <ShapeDivider color="#ffffff">
            <Footer />
          </ShapeDivider>

          <ReactQueryDevtools initialIsOpen={false} />

        </ParallaxProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

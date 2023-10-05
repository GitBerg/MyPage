"use client"

import { Provider, useSelector } from 'react-redux'
import StyledComponentsRegistry from '../lib/registry'
import store from '@/redux/store'
import "./styles.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html style={{ fontFamily: 'Roboto', scrollBehavior: 'smooth' }} lang='en'>
      <head>
        <meta name="author" content="Gutemberg Silva Filho" />
        <meta http-equiv="content-language" content="pt-br, en-US" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Página do meu Portfólio" />
        <meta name="keywords" content="portfolio, contratar, programador, dev"></meta>
        <title>Guttu Portfolio</title>
      </head>
      <body>
      <Provider store={store}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Provider>
      </body>
    </html>
   
  )
}

//scrollSnapType: 'y mandatory'
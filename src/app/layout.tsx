"use client"

import { Provider } from 'react-redux'
import StyledComponentsRegistry from '../lib/registry'
import store from '@/redux/store'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{ scrollBehavior: 'smooth', fontFamily: 'Roboto' }}>
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', userSelect: 'none' }}>
        <Provider store={store}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  )
}

//scrollSnapType: 'y mandatory'
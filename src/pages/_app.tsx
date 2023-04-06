import { Provider } from 'react-redux'
import Link from 'next/link'
import { container } from '@/context'
import { StoreType } from '@/store'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { LoadingContent } from '@/components/layout/LoadingContent'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={container.get<StoreType>('store')}>
      <div className='layout'>

        <div className='layout-header'>
          <h2>Site</h2>

          <ul className='links'>
            <li><Link href='/'>Início</Link></li>
            <li><Link href='/list-users'>Users</Link></li>
            <li><Link href='/list-todos'>Todos</Link></li>
          </ul>
        </div>

        <div className='layout-content'>
          <LoadingContent />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}

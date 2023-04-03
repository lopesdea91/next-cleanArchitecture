import Link from 'next/link'
import { parseCookies } from 'nookies'
import React, { useState } from 'react'

export default function teste() {
  const [cookieLocal, setCookieLocal] = useState(() => {
    return parseCookies()
  })


  return (
    <div className='page-example'>
      <h1>Teste</h1>

      <ul className='links'>
        <li><Link href='/'>Início</Link></li>
        <li><Link href='/teste'>teste</Link></li>
      </ul>

      {/* <div>{Object.values(cookieLocal).length && JSON.stringify(cookieLocal)}</div> */}
    </div>
  )
}

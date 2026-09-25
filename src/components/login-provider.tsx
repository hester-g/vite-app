import type { ReactNode } from 'react'
import { useState } from 'react'

import type { LoginToken } from '../types.ts'
import { LoginContext } from './login-context'

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [loginToken, setLoginToken] = useState<LoginToken>(undefined)

  return (
    <LoginContext value={{ loginToken, setLoginToken }}>
      {children}
    </LoginContext>
  )
}

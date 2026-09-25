import { type Dispatch, type SetStateAction, createContext } from 'react'

import type { LoginToken } from '../types'

export const LoginContext = createContext<
  | undefined
  | {
      loginToken: LoginToken
      setLoginToken: Dispatch<SetStateAction<LoginToken>>
    }
>(undefined)

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState, useContext,
} from 'react'

type LoginToken = string | undefined

const LoginContext = createContext<
  | undefined
  | {
      loginToken: LoginToken
      setLoginToken: Dispatch<SetStateAction<LoginToken>>
    }
>(undefined)

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [loginToken, setLoginToken] = useState<LoginToken>(undefined)

  return (
    <LoginContext value={{ loginToken, setLoginToken }}>
      {children}
    </LoginContext>
  )
}

export const useLogin = () => {
  const context = useContext(LoginContext)

  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider')
  }

  return context
}

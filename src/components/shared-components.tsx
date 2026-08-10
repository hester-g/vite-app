import type { ContainerType } from '../types.ts'

export const Container = ({ children }: ContainerType) => (
  <div className={'flex justify-baseline items-center min-w-3xl py-4'}>
    {children}
  </div>
)

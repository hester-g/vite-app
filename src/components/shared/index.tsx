import type { ContainerType } from '@t'

export const Container = ({ children }: ContainerType) => (
  <div className={'flex justify-baseline items-center min-w-3xl py-4'}>
    {children}
  </div>
)

export const ImageContainer = ({ children }: ContainerType) => (
  <div className={'px-4 items-start'}>{children}</div>
)

export const TextContainer = ({ children }: ContainerType) => (
  <div className={'px-4'}>{children}</div>
)

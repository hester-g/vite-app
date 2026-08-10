import { loginUser } from '../api.ts'
import { Container } from '../components/shared-components.tsx'

const MySpotify = () => {
  return (
    <Container>
      <button
        className={
          'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md cursor-pointer transition-colors'
        }
        onClick={loginUser}
      >
        Login
      </button>
    </Container>
  )
}

export default MySpotify

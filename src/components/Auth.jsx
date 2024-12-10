import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {loggedInUserDisplayName()}
      <button style={{ marginLeft: '10px' }} onClick={logout}>Sign Out</button>
    </div>
  )
}

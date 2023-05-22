import { render, screen, waitFor } from '@redwoodjs/testing/web'

import BlogLayout from './BlogLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

const EMAIL = 'rob@redwoodjs.com'
const loggedIn = () => {
  mockCurrentUser({ email: EMAIL })
}
const loggedOut = () => {
  mockCurrentUser(null)
}

describe('BlogLayout', () => {
  it('displays a Login link when not logged in', async () => {
    loggedOut()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('displays a Logout link when logged in', async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument())
  })

  it("displays a logged in user's email address", async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText(EMAIL)).toBeInTheDocument())
  })
})

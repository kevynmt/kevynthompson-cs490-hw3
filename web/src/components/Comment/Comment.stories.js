import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'It was a mistake to open this checkpoint.',
        createdAt: '2020-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@mod.com',
    roles: 'moderator',
  })

  return (
    <Comment
      comment={{
        id: 1,
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}

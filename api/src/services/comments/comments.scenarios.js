export const standard = defineScenario({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumps over the lazy dog.'
          }
        }
      }
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Stfu jane nobody cares',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.'
          }
        }
      }
    }
  }
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
      }
    }
  }
})

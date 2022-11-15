const { faker } = require('@faker-js/faker')

const create = () => {
  let tweets = []

  const max = faker.datatype.number({min: 50, max: 200})
  for (let index = 0; index < max; index++) {
    tweets.push({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      userName: '@' + faker.internet.userName(),
      avatar: faker.image.avatar(),
      tweet: faker.random.words(faker.datatype.number({min: 5, max: 20})),
      date: faker.date.past(0)
    })
  }

  const list = () => [...tweets]
  const add = (text) => {
    const tweet = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      userName: '@' + faker.internet.userName(),
      avatar: faker.image.avatar(),
      tweet: text,
      date: (new Date()).toISOString()
    }

    tweets = [tweet, ...tweets]

    return tweet
  }

  return {
    list,
    add
  }
}

module.exports = create()

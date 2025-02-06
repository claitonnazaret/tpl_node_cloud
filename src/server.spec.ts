import Person from './server'

it('should sum', () => {
  const person = new Person()
  expect(person.sayMyName()).toBe('Claiton')
})

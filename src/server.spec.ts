import Person from '@/server'

it('should test the server', () => {
  const person = new Person()
  expect(person.sayMyName()).toBe('Claiton')
})

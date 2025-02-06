import Teste from '@/teste/teste'

it('should sum', () => {
  const teste = new Teste()
  expect(teste.testConsoleString()).toBe('Testando console.log')
})

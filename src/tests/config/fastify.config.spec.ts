import FastifyConfig from '@/config/fastify.config'
import { fastifyCors } from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

describe('FastifyConfig', () => {
  let fastifyConfig: FastifyConfig

  beforeEach(() => {
    fastifyConfig = new FastifyConfig()
    jest
      .spyOn(FastifyConfig.server, 'setNotFoundHandler')
      .mockImplementation(() => FastifyConfig.server)
  })

  it('should create an instance of FastifyConfig', () => {
    expect(fastifyConfig).toBeInstanceOf(FastifyConfig)
  })

  it('should set validator and serializer compilers', () => {
    const server = FastifyConfig.server
    const setValidatorCompilerSpy = jest.spyOn(server, 'setValidatorCompiler')
    const setSerializerCompilerSpy = jest.spyOn(server, 'setSerializerCompiler')

    fastifyConfig['sets']()

    expect(setValidatorCompilerSpy).toHaveBeenCalledWith(expect.any(Function))
    expect(setSerializerCompilerSpy).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should set not found handler', () => {
    const server = FastifyConfig.server
    const setNotFoundHandlerSpy = jest.spyOn(server, 'setNotFoundHandler')

    fastifyConfig['sets']()

    expect(setNotFoundHandlerSpy).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should register fastifyCors', () => {
    const server = FastifyConfig.server
    const registerSpy = jest.spyOn(server, 'register')

    fastifyConfig['register']()

    expect(registerSpy).toHaveBeenCalledWith(fastifyCors, { origin: '*' })
  })

  it('should register fastifySwagger and fastifySwaggerUi', () => {
    const server = FastifyConfig.server
    const registerSpy = jest.spyOn(server, 'register')

    fastifyConfig['swagger']()

    expect(registerSpy).toHaveBeenCalledWith(fastifySwagger, {
      openapi: { info: { title: 'TPL Node Cloud', version: '1.0.0' } },
    })
    expect(registerSpy).toHaveBeenCalledWith(fastifySwaggerUi, {
      routePrefix: '/docs',
    })
  })

  it('should return the fastify instance', () => {
    const instance = fastifyConfig.getInstance()
    expect(instance).toBe(FastifyConfig.server)
  })
})

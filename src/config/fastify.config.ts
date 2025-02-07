import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

class FastifyConfig {
  static server = fastify({ logger: true })

  constructor() {
    this.sets()
    this.register()
    this.swagger()
  }

  private sets() {
    const server = FastifyConfig.server
    server.setValidatorCompiler(validatorCompiler)
    server.setSerializerCompiler(serializerCompiler)
    server.setNotFoundHandler((request, reply) => {
      reply.code(404).send({ message: 'Not Found' })
    })
  }

  private register() {
    const server = FastifyConfig.server
    server.register(fastifyCors, { origin: '*' })
  }

  private swagger() {
    const server = FastifyConfig.server
    server.register(fastifySwagger, {
      openapi: { info: { title: 'TPL Node Cloud', version: '1.0.0' } },
    })
    server.register(fastifySwaggerUi, { routePrefix: '/docs' })
  }

  getInstance() {
    return FastifyConfig.server
  }
}

export default FastifyConfig

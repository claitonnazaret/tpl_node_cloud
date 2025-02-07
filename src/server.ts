import FastifyConfig from '@/config/fastify.config'
import { FastifyInstance } from 'fastify'

const server: FastifyInstance = new FastifyConfig().getInstance()

server.listen({ port: 3000 }, (err: Error | null, address: string) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server listening on ${address}`)
})

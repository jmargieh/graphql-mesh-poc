import {ApolloServer} from 'apollo-server-fastify';
import fastify from 'fastify';
import type {ServeMeshOptions} from '@graphql-mesh/runtime';

export default async function ({getBuiltMesh, logger, argsPort}: ServeMeshOptions): Promise<void> {
    const {schema, getEnveloped} = await getBuiltMesh();
    const app = fastify();
    const apolloServer = new ApolloServer({
        schema,
        executor: async requestContext => {
            const {schema, execute, contextFactory} = getEnveloped({req: requestContext.request.http});
            return execute({
                schema: schema,
                document: requestContext.document,
                contextValue: await contextFactory(),
                variableValues: requestContext.request.variables,
                operationName: requestContext.operationName
            });
        }
    });

    await apolloServer.start();
    app.register(apolloServer.createHandler());
    await app.listen(argsPort);
    console.log(`🚀 Server ready at http://localhost:${argsPort}${apolloServer.graphqlPath}`);
}

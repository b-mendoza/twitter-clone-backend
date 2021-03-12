import { ApolloServer } from 'apollo-server';

import { createContext } from './context';

import { schema } from './schema';

const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ url }) =>
  console.log(
    `\
🚀 Server Ready at: ${url}
⭐️ See Sample Queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`,
  ),
);

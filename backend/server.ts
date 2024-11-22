const { ApolloServer, gql } = require("apollo-server");

const Books = [
  {
    title: "I Am a Cat",
    author: "Natsume Sōseki",
  },
  {
    title: "Run, Melos!",
    author: "Osamu Dazai",
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;

const resolvers = {
  Query: {
    test: () => Books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

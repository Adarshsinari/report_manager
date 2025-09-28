const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const EmployeeQuery = require("./graphql/queries/employees");
const TeamQuery = require("./graphql/queries/teams");
const TeamMutation = require("./graphql/mutations/teams");
const EmployeeMutation = require("./graphql/mutations/employees");


const { GraphQLSchema } = require("graphql");

const app = express();
const PORT = 5000;

const schema = new GraphQLSchema({
  query: TeamQuery,
  mutation: TeamMutation
});

app.get(
  "/team",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.post(
  "/team",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get(
  "/employee",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: EmployeeQuery,
      mutation: EmployeeMutation
    }),
    graphiql: true,
  })
);

app.post(
  "/employee",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: EmployeeQuery,
      mutation: EmployeeMutation
    }),
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server Running...");
});

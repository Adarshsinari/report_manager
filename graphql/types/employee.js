 const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const EmployeeType = new GraphQLObjectType({
  name: "Employee",
  description: "A member of team",
  fields: ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    teamId: { type: new GraphQLNonNull(GraphQLInt) },
  })
});

module.exports = EmployeeType;

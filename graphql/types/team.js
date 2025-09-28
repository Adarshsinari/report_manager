const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const EmployeeService = require("../../services/employee");
const EmployeeType = require("../types/employee");

const TeamType = new GraphQLObjectType({
  name: "Team",
  description: "A Team of employees",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve: (team) => EmployeeService.getEmployees(team.id),
    },
  }),
});

module.exports = TeamType;

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

const EmployeeQuery = new GraphQLObjectType({
  name: "QueryEmployee",
  description: "Root Query",
  fields: () => ({
    employee: {
      type: EmployeeType,
      description: "A single employee",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => EmployeeService.getEmployeeById(args.id),
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      description: "All employees",
      resolve: () => EmployeeService.getEmployees(),
    },
  }),
});

module.exports = EmployeeQuery;

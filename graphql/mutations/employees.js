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
const employees = require("../../db/employees");

const EmployeeMutation = new GraphQLObjectType({
  name: "MutationEmployee",
  description: "Root Mutation",
  fields: () => ({
    addemployees: {
      type: EmployeeType,
      description: "Add employee",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        teamId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (_, args) => {
        const employee = { id: employees.length + 1, name: args.name, teamId: args.teamId };
        EmployeeService.createEmployee(employee);
        return employee;
      },
    },
  }),
});

module.exports = EmployeeMutation;

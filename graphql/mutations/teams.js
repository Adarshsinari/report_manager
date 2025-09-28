const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const TeamService = require("../../services/team");
const TeamType = require("../types/team");
const teams = require("../../db/teams")

const TeamMutation = new GraphQLObjectType({
  name: "MutationTeam",
  description: "Root Mutation",
  fields: () => ({
    addteam: {
      type: TeamType,
      description: "Add team",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args) => {
        const team = { id: teams.length + 1, name: args.name}
        TeamService.createTeam(team)
        return team;
      },
    },
  }),
});

module.exports = TeamMutation;

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

const TeamQuery = new GraphQLObjectType({
  name: "QueryTeam",
  description: "Root Query",
  fields: () => ({
    team: {
      type: TeamType,
      description: "A single team",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_, args) => TeamService.getTeamById(args.id),
    },
    teams: {
      type: new GraphQLList(TeamType),
      description: "All teams",
      resolve: () => TeamService.getTeams(),
    },
  }),
});

module.exports = TeamQuery;

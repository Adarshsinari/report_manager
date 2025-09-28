const teams = require("../db/teams");

class TeamService {

  getTeams() {
    return teams;
  }

  getTeamById(id) {
    return teams.find((team) => team.id === id);
  }

  createTeam(team) {
    return teams.push(team);
  }
}

module.exports = new TeamService();

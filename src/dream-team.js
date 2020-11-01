const CONSOLE_LOG_ENABLE = false;

module.exports = function createDreamTeam(members_array/* members */) {
  if (!(Array.isArray(members_array))) {
    if (CONSOLE_LOG_ENABLE) console.log((Array.isArray(members_array)));
    return false;
  }

  let team = '';

  for (let i = 0; i < members_array.length; i++) {
    if (typeof (members_array[i]) === "string") {
      team += members_array[i].match(/\w/);
    }
  }

  if (CONSOLE_LOG_ENABLE) console.log(team);
  team = team.toUpperCase().split("").sort().join("");
  if (CONSOLE_LOG_ENABLE) console.log(team);

  if (team === "") {
    return false;
  }
  return team;
  // throw 'Not implemented';
  // // remove line with error and write your code here
};

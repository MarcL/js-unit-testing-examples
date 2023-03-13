function getUserDetails(username) {
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  return executeQuery(query);
}

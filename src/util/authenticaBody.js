const authenticateBody = (users, body) =>
  Object.fromEntries(
    Object.entries(body).filter(([key, value]) =>
      Object.keys(users[0]).includes(key)
    )
  );

module.exports = authenticateBody;

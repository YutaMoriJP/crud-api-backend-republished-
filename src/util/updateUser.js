const updateUser = (users, body) => users.map(user => ({ ...user, ...body }));

module.exports = updateUser;

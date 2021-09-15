const filteredUser = (users, id) => {
  const filtered = users.filter(user => {
    return user._id == id;
  });
  return filtered;
};

module.exports = filteredUser;

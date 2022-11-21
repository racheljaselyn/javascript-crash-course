let users = [
  {
    email: "rachel@gmail.com",
    password: "dexter",
    username: "rachel",
    subscriptionStatus: "VIP",
    discordId: "123rachel",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "abbie",
    email: "abby@gmail.com",
    password: "gabby",
    subscriptionStatus: "standard",
    discordId: "123abby",
    lessonsCompleted: [0, 1, 2],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i.password === password]) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - Try again");
      }
    }
  }
}

login("rachel@gmail.com", "dexter", "rachel", "VIP", "123rachel", [0, 1, 2, 3]);

// - Create a register function that accepts: username, email etc..

// - Inside your register function create a user Object,
// and push this user object onto the 'users' array

function register(user) {
users.push(user);
}

register({
    email: "rachel@gmail.com",
    password: "dexter",
    username: "rachel",
    subscriptionStatus:"VIP",
    discordId: "123rachel",
    lessonsCompleted: [0, 1, 2, 3]
});

// log the new user in

console.log(users);
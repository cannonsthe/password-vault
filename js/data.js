const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Adam', role: ROLE.ADMIN },
    { id: 2, name: 'Bob', role: ROLE.BASIC },
    { id: 3, name: 'Cayden', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Adam's Project", userId: 1 },
    { id: 2, name: "Bob's Project", userId: 2 },
    { id: 3, name: "Cayden's Project", userId: 3 }
  ]
}
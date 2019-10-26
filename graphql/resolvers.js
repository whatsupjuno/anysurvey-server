import { getAllUsers, getAUser, addAUser, delUser } from './db'

const resolvers = {

    Query: {
      allUsers: () => getAllUsers(),
      aUser:(_, { id }) => getAUser(id)
    },

    Mutation: {
        addUser: (_, { givenName, surName, googleId, userName, password, googleEmail }) => addAUser( givenName, surName, googleId, userName,password, googleEmail),
        delUser: (_, { id }) => delUser(id)
    }
};
  
  export default resolvers;
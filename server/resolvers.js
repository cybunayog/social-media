const resolvers = {
  Query: {
    example: () => ({ _id: '1', text: 'This is an example' }),
  }
};
  
module.exports = resolvers;
import { gql } from 'apollo-boost';

export const exampleQuery = gql`
  {
  example {
    _id
    text
  }
}
`;
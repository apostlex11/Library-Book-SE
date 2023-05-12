import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
{
    myBooks {
        _id
        username
        email
        bookCount
        savedBooks {
            authors
            bookId
            description
            image
            link
            title
        }
    }
}
`;
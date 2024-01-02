import {
    ItemLabel,
    ListOfBook,
    ListOfLabels,
    TableOfBooks,
} from '../ListOfBooks/ListOfBooks.styled';

import { BookTraining } from './BookTraining';

export function ListOfBooksTraining({ books }) {
    return (
        <TableOfBooks>
            <ListOfLabels>
                <ItemLabel>Title</ItemLabel>
                <ItemLabel>Author</ItemLabel>
                <ItemLabel>Year</ItemLabel>
                <ItemLabel>Nr. of pages</ItemLabel>
            </ListOfLabels>
            <ListOfBook>
                {books.map(book => {
                    return (
                        <BookTraining key={book._id} data={book}></BookTraining>
                    );
                })}
            </ListOfBook>
        </TableOfBooks>
    );
}

import {
    ListOfBook,
    ListOfLabels,
    TableOfBooks,
} from '../ListOfBooks/ListOfBooks.styled';
import { TrItemLabel } from './ListOfBooksStartTraining.styled';
import { BookStartTraining } from './BookStartTraining';

export function ListOfBooksStartTraining({ books, deleteBook }) {
    return (
        <>
            <ListOfLabels>
                <TrItemLabel>Name of the book</TrItemLabel>
                <TrItemLabel>Author</TrItemLabel>
                <TrItemLabel>Year</TrItemLabel>
                <TrItemLabel>Pages</TrItemLabel>
            </ListOfLabels>
            <TableOfBooks>
                <ListOfBook>
                    {books.map(book => {
                        return (
                            <BookStartTraining
                                key={book._id}
                                id={book._id}
                                data={book}
                                deleteBook={deleteBook}
                            ></BookStartTraining>
                        );
                    })}
                </ListOfBook>
            </TableOfBooks>
        </>
    );
}

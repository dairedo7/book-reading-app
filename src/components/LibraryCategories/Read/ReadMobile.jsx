import { List, Title, EmptyCategoryMessage } from '../LibraryCategories.styled';
import ReadMobileItem from '../Read/ReadMobileItem';

const ReadMobile = ({ color, books, openModal }) => {
    return (
        <>
            <Title>Finished</Title>
            {!!books?.length ? (
                <>
                    <List>
                        {books &&
                            books.map(book => (
                                <ReadMobileItem
                                    key={book._id}
                                    color={color}
                                    book={book}
                                    openModal={openModal}
                                />
                            ))}
                    </List>
                </>
            ) : (
                <EmptyCategoryMessage>
                    No books here yet...
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default ReadMobile;

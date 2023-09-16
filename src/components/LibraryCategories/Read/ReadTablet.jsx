import {
    Author,
    ListOther,
    NameBook,
    Page,
    RatingTitle,
    Title,
    WrapperTitles,
    Year,
    EmptyCategoryMessage,
} from '../LibraryCategories.styled';
import ReadTabletItem from '../Read/ReadTabletItem';

const ReadTablet = ({ color, books, openModal }) => {
    return (
        <>
            <Title>Finished</Title>
            {!!books?.length ? (
                <>
                    <WrapperTitles>
                        <NameBook>Name of the book</NameBook>
                        <Author>Author</Author>
                        <Year>Year</Year>
                        <Page>Pages</Page>
                        <RatingTitle>Rating</RatingTitle>
                    </WrapperTitles>
                    <ListOther>
                        {books &&
                            books.map(book => (
                                <ReadTabletItem
                                    key={book._id}
                                    color={color}
                                    book={book}
                                    openModal={openModal}
                                />
                            ))}
                    </ListOther>
                </>
            ) : (
                <EmptyCategoryMessage>
                    No books here yet...
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default ReadTablet;

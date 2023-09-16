import {
    EmptyCategoryMessage,
    ListOther,
    Title,
    TitleAuthor,
    TitleName,
    TitlePage,
    TitleYear,
    WrapperTitles,
} from '../LibraryCategories.styled';

import OtherCategoriesTabletItem from '../OtherCategories/OtherCategoriesTabletItem';

const OtherCategoriesTablet = ({ type, color, books }) => {
    return (
        <>
            <Title>{type === 'inProcess' ? 'Reading' : 'Want to read'}</Title>

            {!!books?.length ? (
                <>
                    <WrapperTitles>
                        <TitleName>Name of the book</TitleName>
                        <TitleAuthor>Author</TitleAuthor>
                        <TitleYear>Year</TitleYear>
                        <TitlePage>Pages</TitlePage>
                    </WrapperTitles>
                    <ListOther>
                        {books &&
                            books.map(book => (
                                <OtherCategoriesTabletItem
                                    key={book._id}
                                    color={color}
                                    book={book}
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

export default OtherCategoriesTablet;

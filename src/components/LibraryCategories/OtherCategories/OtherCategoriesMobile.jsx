import { List, Title, EmptyCategoryMessage } from '../LibraryCategories.styled';
import OtherCategoriesMobileItem from '../OtherCategories/OtherCategoriesMobileItem';

const OtherCategoriesMobile = ({ color, type, books }) => {
    return (
        <>
            <Title>{type === 'inProcess' ? 'Reading' : 'Want to read'}</Title>
            {!!books?.length ? (
                <List>
                    {books &&
                        books.map(book => (
                            <OtherCategoriesMobileItem
                                key={book._id}
                                color={color}
                                book={book}
                            />
                        ))}
                </List>
            ) : (
                <EmptyCategoryMessage>
                    No books here yet...
                </EmptyCategoryMessage>
            )}
        </>
    );
};

export default OtherCategoriesMobile;

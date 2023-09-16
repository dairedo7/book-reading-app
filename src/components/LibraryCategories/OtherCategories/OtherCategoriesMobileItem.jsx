import icons from '../../../images/svg/icons.svg';
import {
    Icon,
    Item,
    Text,
    TextSelection,
    WrapperItem,
} from '../LibraryCategories.styled';
import AnimationItem from '../../Animations/AnimationItem';
import { AnimatePresence } from 'framer-motion';

const OtherCategoriesMobileItem = ({ color, book }) => {
    const { title, author, year, totalPages } = book;
    return (
        <AnimatePresence>
            <AnimationItem>
                <Item>
                    <Icon color={color} width="22" height="18.1">
                        <use href={`${icons}#icon-book-no-color`} />
                    </Icon>
                    <WrapperItem>
                        <Text>{title}</Text>
                        <Text>
                            <TextSelection>Author:</TextSelection>
                            {author}
                        </Text>
                        <Text>
                            <TextSelection>Year:</TextSelection> {year}
                        </Text>
                        <Text>
                            <TextSelection>Pages:</TextSelection>
                            {totalPages}
                        </Text>
                    </WrapperItem>
                </Item>
            </AnimationItem>
        </AnimatePresence>
    );
};

export default OtherCategoriesMobileItem;

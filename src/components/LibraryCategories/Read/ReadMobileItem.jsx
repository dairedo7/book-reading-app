import icons from '../../../images/svg/icons.svg';
import {
    Button,
    Icon,
    Item,
    StyledRating,
    Text,
    TextSelection,
    WrapperItem,
} from '../LibraryCategories.styled';
import AnimationItem from '../../Animations/AnimationItem';
import { AnimatePresence } from 'framer-motion';

const ReadMobileItem = ({ book, color, openModal }) => {
    const { title, author, year, totalPages, rating, _id } = book;

    const openResumeModal = () => {
        openModal(_id);
    };

    return (
        <AnimatePresence>
            <AnimationItem>
                <Item>
                    <Icon color={color} width="22" height="18.1">
                        <use href={`${icons}#icon-book-no-color`} />
                    </Icon>
                    <WrapperItem>
                        <Text> {title} </Text>
                        <Text>
                            <TextSelection>Author:</TextSelection> {author}
                        </Text>
                        <Text>
                            <TextSelection>Year:</TextSelection> {year}
                        </Text>
                        <Text>
                            <TextSelection>Pages:</TextSelection> {totalPages}
                        </Text>
                        <Text>
                            <TextSelection>Rating:</TextSelection>{' '}
                            <StyledRating
                                name="no-value"
                                value={Number(rating)}
                                readOnly
                                size="small"
                            />
                        </Text>
                        <Button
                            type="button"
                            variant={'gray'}
                            onClick={openResumeModal}
                        >
                            Summary
                        </Button>
                    </WrapperItem>
                </Item>
            </AnimationItem>
        </AnimatePresence>
    );
};
export default ReadMobileItem;

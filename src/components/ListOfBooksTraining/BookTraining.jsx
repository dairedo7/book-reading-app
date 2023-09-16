import {
    Desc,
    DescItem,
    IconCheckbox,
    Item,
    Label,
    ListOfDesc,
    Title,
    Wrapper,
} from '../ListOfBooks/ListOfBooks.styled';
import icons from '../../images/svg/icons.svg';

export function BookTraining({ data }) {
    const { title, year, totalPages, author, status } = data;
    const checked = status === 'done';

    return (
        <Item>
            <Wrapper>
                <div>
                    <IconCheckbox>
                        {checked ? (
                            <use href={`${icons}#icon-checkbox-color`} />
                        ) : (
                            <use href={`${icons}#icon-checkbox`} />
                        )}
                    </IconCheckbox>
                </div>
                <Title>{title}</Title>
            </Wrapper>
            <ListOfDesc>
                <DescItem>
                    <Label>Author:</Label>
                    <Desc>{author}</Desc>
                </DescItem>
                <DescItem>
                    <Label>Year:</Label>
                    <Desc>{year}</Desc>
                </DescItem>
                <DescItem>
                    <Label>Pages:</Label>
                    <Desc>{totalPages}</Desc>
                </DescItem>
            </ListOfDesc>
        </Item>
    );
}

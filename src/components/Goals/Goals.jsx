import {
    Description,
    InfoWrapper,
    Item,
    StatsItem,
    Text,
    Title,
    Wrapper,
} from './Goals.styled';

const Goals = ({ amountBooks, amountDays, booksLeft }) => {
    return (
        <>
            <Wrapper booksLeft={booksLeft}>
                <Title>My goal to read</Title>
                <InfoWrapper>
                    <StatsItem>
                        <Item>
                            <Text>{amountBooks}</Text>
                        </Item>
                        <Description>Number of books</Description>
                    </StatsItem>
                    <StatsItem>
                        <Item>
                            <Text>{amountDays}</Text>
                        </Item>
                        <Description>Number of days</Description>
                    </StatsItem>
                    {!!booksLeft && (
                        <StatsItem>
                            <Item>
                                <Text booksLeft={booksLeft}>{booksLeft}</Text>
                            </Item>
                            <Description>Books left to read</Description>
                        </StatsItem>
                    )}
                </InfoWrapper>
            </Wrapper>
        </>
    );
};

export default Goals;

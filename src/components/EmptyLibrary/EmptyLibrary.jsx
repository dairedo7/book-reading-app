import icons from '../../images/svg/icons.svg';
import {
    List,
    BookName,
    ArrowBackIcon,
    MobileContainer,
    Btn,
    ListItem,
    Box,
    Title,
    StepText,
    StepTexIcon,
    StepDescr,
    StepDescrIcon,
} from './EmptyLibrary.styled';

const EmptyLibrary = () => {
    return (
        <>
            <MobileContainer>
                <ArrowBackIcon width="24" height="12">
                    <use href={`${icons}#icon-arrowBack`} />
                </ArrowBackIcon>

                <BookName>Name of the book</BookName>
            </MobileContainer>
            <Box>
                <List>
                    <ListItem>
                        <Title>Step 1.</Title>
                        <StepText>
                            <StepTexIcon width="22" height="17">
                                <use href={`${icons}#icon-book`} />
                            </StepTexIcon>
                            Create your own library
                        </StepText>
                        <StepDescr>
                            <StepDescrIcon width="10" height="12">
                                <use
                                    href={`${icons}#icon-perpendicularArrow`}
                                />
                            </StepDescrIcon>
                            Add the books you intend to read
                        </StepDescr>
                    </ListItem>
                    <ListItem>
                        <Title>Step 2.</Title>
                        <StepText>
                            <StepTexIcon width="15" height="17">
                                <use href={`${icons}#icon-flag`} />
                            </StepTexIcon>
                            Create your first reading exercise
                        </StepText>
                        <StepDescr>
                            <StepDescrIcon width="10" height="12">
                                <use
                                    href={`${icons}#icon-perpendicularArrow`}
                                />
                            </StepDescrIcon>
                            Set the goal, choose the period, start training.
                        </StepDescr>
                    </ListItem>
                </List>
                <Btn variant={'accent'} type="button">
                    Ок
                </Btn>
            </Box>
        </>
    );
};

export default EmptyLibrary;

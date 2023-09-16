import {
    MainTitle,
    SecTitle,
    Text,
    ListItem,
    ListBox,
    IconSpan,
    FirstList,
    Container,
    DesktopBox,
} from './BooksInfo.styled';
import icons from '../../images/svg/icons.svg';
import MobLinks from './MobLinks';

const BookInfo = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Container>
            <DesktopBox>
                <MainTitle>Books Reading</MainTitle>
                <ListBox>
                    <FirstList>
                        <SecTitle>Will Help You</SecTitle>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                To set your goal quicker and actually start
                                reading
                            </Text>
                        </ListItem>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Proportionately distribute the load for each day
                            </Text>
                        </ListItem>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>Keep track of the personal success</Text>
                        </ListItem>
                    </FirstList>
                    <ul>
                        <SecTitle>Also, you will learn how to:</SecTitle>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Form your own opinion independently from others
                            </Text>
                        </ListItem>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Improve your professional skills based on
                                acquired knowledge
                            </Text>
                        </ListItem>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>Become an interesting interlocutor</Text>
                        </ListItem>
                    </ul>
                </ListBox>
            </DesktopBox>
            {isMobile && <MobLinks />}
        </Container>
    );
};

export default BookInfo;

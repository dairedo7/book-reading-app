import { Button, ButtonWrapper, Icon, Text } from './WellDoneModal.styled';
import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';
import { useNavigate } from 'react-router-dom';

const WellDoneModal = ({ closeModal }) => {
    const goToNewTraining = () => {
        document.location.reload();
    };

    const navigate = useNavigate();

    const finishTraining = () => {
        navigate('../library');
    };

    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'info'}>
                <Icon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </Icon>
                <Text>
                    Not bad, <br />
                    but you can do better! <br />
                    Next time, things will go your way.
                </Text>
                <ButtonWrapper>
                    <Button variant={'tranparent'} onClick={goToNewTraining}>
                        New training
                    </Button>
                    <Button variant={'accent'} onClick={finishTraining}>
                        Return to the library
                    </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

export default WellDoneModal;

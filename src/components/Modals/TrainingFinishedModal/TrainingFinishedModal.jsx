import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    ButtonWrapper,
    OrangeIcon,
    Text,
} from '../WellDoneModal/WellDoneModal.styled';

const TrainingFinishedModal = ({ closeModal }) => {
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
                <OrangeIcon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </OrangeIcon>
                <Text>
                    Well done, <br />
                    You've managed to complete the entire training!
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

export default TrainingFinishedModal;

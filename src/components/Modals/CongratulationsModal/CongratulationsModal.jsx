import { Button, Icon, Text } from './CongratulationsModal.styled';

import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';

const CongratulationsModal = ({ closeModal }) => {
    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'info'}>
                <Icon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </Icon>
                <Text>
                    Congratulations! <br />
                    Another book has been read!
                </Text>

                <Button variant={'accent'} onClick={closeModal}>
                    Done
                </Button>
            </ModalWrapper>
        </>
    );
};

export default CongratulationsModal;

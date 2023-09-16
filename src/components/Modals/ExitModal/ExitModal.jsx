import { Button, ButtonWrapper, Text } from './ExitModal.styled';
import { ModalWrapper } from '../ModalWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../redux/auth/auth-operations';
import { getUserId } from '../../../redux/auth/auth-selectors';

const ExitModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const id = useSelector(getUserId);

    const handleLogOut = () => {
        dispatch(signOut(id));
        closeModal();
    };

    return (
        <>
            <ModalWrapper variant={'info'} closeModal={closeModal}>
                <Text>
                    If you exit the program right now, all unsaved data will be
                    lost
                </Text>
                <ButtonWrapper>
                    <Button variant={'transparent'} onClick={closeModal}>
                        Return
                    </Button>
                    <Button variant={'accent'} onClick={handleLogOut}>
                        Proceed with exit
                    </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

export default ExitModal;

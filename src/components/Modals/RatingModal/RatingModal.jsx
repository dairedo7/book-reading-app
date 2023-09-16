import {
    Button,
    ButtonWrapper,
    ErrWrapper,
    Form,
    Input,
    InputName,
    Label,
    StyledRating,
    Title,
} from './RatingModal.styled';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ModalWrapper } from '../ModalWrapper';
import { useAddBookReviewMutation } from '../../../redux/books/booksSlice';

const RatingModal = ({ closeModal, bookId }) => {
    const { handleSubmit, control } = useForm();
    const [ratingErr, setRatingErr] = useState(null);

    const [addReview] = useAddBookReviewMutation();

    const onSubmit = data => {
        addReview({ ...data, bookId });
        closeModal();
    };

    const onError = err => setRatingErr(err.rating.message);

    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'input'}>
                <Title>Pick the book's rating</Title>
                <Form>
                    <Controller
                        name={'rating'}
                        control={control}
                        rules={{
                            required: 'Поставте оцінку щоб відправити відгук',
                        }}
                        render={({ field: { onChange, value } }) => (
                            <ErrWrapper>
                                <StyledRating
                                    name="simple-controlled"
                                    value={Number(value)}
                                    onChange={newValue => {
                                        setRatingErr(null);
                                        onChange(newValue);
                                    }}
                                />
                                {ratingErr && <p>{ratingErr}</p>}
                            </ErrWrapper>
                        )}
                    />

                    <Controller
                        name={'resume'}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Label>
                                <InputName>Summary</InputName>
                                <Input
                                    placeholder={'...'}
                                    value={value}
                                    onChange={onChange}
                                />
                            </Label>
                        )}
                    />
                    <ButtonWrapper>
                        <Button variant={'transparent'} onClick={closeModal}>
                            Back
                        </Button>
                        <Button
                            onClick={handleSubmit(onSubmit, onError)}
                            variant={'accent'}
                        >
                            Save
                        </Button>
                    </ButtonWrapper>
                </Form>
            </ModalWrapper>
        </>
    );
};

export default RatingModal;

import {
    Button,
    ButtonWrapper,
    ErrWrapper,
    Form,
    Input,
    InputName,
    Label,
    StyledRating,
    StyledReview,
    Title,
} from './RatingModal.styled';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ModalWrapper } from '../ModalWrapper';
import {
    useAddBookReviewMutation,
    useGetSummaryQuery,
} from '../../../redux/books/booksSlice';
import { MiniLoader } from '../../Loader/MiniLoader';

const RatingModal = ({ closeModal, bookId }) => {
    const { handleSubmit, control } = useForm();
    const [ratingErr, setRatingErr] = useState(null);
    const [summary, setSummary] = useState('');

    const { data: summaryData, isLoading } = useGetSummaryQuery();

    useEffect(() => {
        if (summaryData) {
            const matchingBook = summaryData.find(book => book._id === bookId);
            if (matchingBook) {
                setSummary(matchingBook.resume);
            }
        }
    }, [summaryData, bookId]);

    const [addReview] = useAddBookReviewMutation();

    const onSubmit = data => {
        addReview({ ...data, bookId });
        closeModal();
    };

    if (isLoading) return <MiniLoader />;

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
                            required: 'Select a rating to submit your review',
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

                                <StyledReview>
                                    {summary
                                        ? summary
                                        : 'You review will appear here...'}
                                </StyledReview>
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

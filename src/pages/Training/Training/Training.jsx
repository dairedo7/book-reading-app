import { TrainingForm } from '../../../components/TrainingForm';
import {
    BottomWrapper,
    Button,
    FormListWrapper,
    FormWrapper,
    GoalsWrapper,
    HeadWrapper,
    ListWrapper,
    Title,
} from '../Training.styled';
import Goals from '../../../components/Goals';
import { ListOfBooksStartTraining } from '../../../components/ListOfBooksStartTraining';
import { Graph } from '../../../components/Graph/Graph';
import { useState } from 'react';
import {
    useAddPlaningMutation,
    useGetPlanBooksQuery,
    useGetPlanningQuery,
} from '../../../redux/books/booksSlice';
import { differenceInCalendarDays, format } from 'date-fns';
import Statistics from '../../Statistics/Statistics';
import { Loader } from '../../../components/Loader/Loader';
import AnimatioPage from '../../../components/Animations/AnimationPage';

import notifications from '../../../helpers/notification';

const { warningNotification } = notifications;

export const Training = () => {
    const [selectedBooks, setSelectedBooks] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [startValue, setStartValue] = useState(null);
    const [endValue, setEndValue] = useState(null);
    const [pagesQuantity, setPagesQuantity] = useState(0);

    const deleteBook = id => {
        setSelectedBooks(prev => prev.filter(book => book._id !== id));
        setSelectedIds(prev => prev.filter(bookId => bookId !== id));
    };

    const { data: books = [], isLoading: isBooksLoading } =
        useGetPlanBooksQuery();

    const addBook = id => {
        if (selectedBooks.find(book => book._id === id)) {
            warningNotification('You cannot add the same book twice!');
            return;
        }

        setSelectedBooks(prev => [
            ...prev,

            books.data?.result.find(book => book._id === id),
        ]);
        setSelectedIds(prev => [...prev, id]);

        const pages = books.data?.result.find(
            book => book._id === id
        ).totalPages;

        setPagesQuantity(prev => prev + pages);
    };

    const [addPlaning] = useAddPlaningMutation();

    const startNewPlaning = () => {
        const books = selectedBooks.reduce(
            (acc, book) => [...acc, book._id],
            []
        );

        if (!startValue || !endValue) {
            warningNotification(
                'Pick the beginning and the end of the training!'
            );
            return;
        }

        if (books.length === 0) {
            warningNotification(
                'To start your training, choose at least one book from the library!'
            );
            return;
        }

        const startDate = format(startValue._d, 'yyyy-MM-dd');
        const endDate = format(endValue._d, 'yyyy-MM-dd');

        const newPlaning = { startDate, endDate, books };

        addPlaning(newPlaning);
    };

    const getTrainingDuration = () => {
        if (!startValue || !endValue) return 0;
        return differenceInCalendarDays(endValue._d, startValue._d);
    };

    const { data, isLoading } = useGetPlanningQuery();
    if (isLoading || isBooksLoading) return <Loader />;
    if (data) return <Statistics result={data} />;

    const getAveragePages = () => {
        if (!getTrainingDuration()) return 0;

        return Math.ceil(pagesQuantity / getTrainingDuration());
    };

    const graphData = Array(getTrainingDuration()).fill({
        pv: getAveragePages(),
    });

    const getOptionBooks = () => {
        return books.data?.result.filter(book => {
            return !selectedIds.includes(book._id);
        });
    };

    return (
        <>
            <AnimatioPage>
                <HeadWrapper>
                    <GoalsWrapper>
                        <Goals
                            amountBooks={selectedBooks.length}
                            amountDays={getTrainingDuration()}
                        />
                    </GoalsWrapper>

                    <FormListWrapper>
                        <FormWrapper>
                            <Title>My training</Title>
                            <TrainingForm
                                addBook={addBook}
                                startValue={startValue}
                                setStartValue={setStartValue}
                                endValue={endValue}
                                setEndValue={setEndValue}
                                books={getOptionBooks()}
                            />
                        </FormWrapper>

                        <ListWrapper>
                            <ListOfBooksStartTraining
                                books={selectedBooks}
                                deleteBook={deleteBook}
                            />
                        </ListWrapper>
                    </FormListWrapper>
                </HeadWrapper>

                <BottomWrapper>
                    <Button variant={'accent'} onClick={startNewPlaning}>
                        Start the training
                    </Button>

                    <Graph averagePages={getAveragePages()} data={graphData} />
                </BottomWrapper>
            </AnimatioPage>
        </>
    );
};

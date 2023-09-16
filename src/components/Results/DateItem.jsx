import { Date, DatesItem, NumberOfPages, Pages } from './Results.styled';

export function DateItem({ data: { date, pagesCount } }) {
    return (
        <DatesItem>
            <Date>{date}</Date>

            <NumberOfPages>
                {pagesCount}&nbsp;
                <Pages>pages</Pages>
            </NumberOfPages>
        </DatesItem>
    );
}

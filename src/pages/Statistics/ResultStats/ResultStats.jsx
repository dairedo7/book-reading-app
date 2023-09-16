import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addMonths } from 'date-fns';
import {
    SkillPage,
    WidthPlan,
    Input,
    TwoBox,
    HomeRes,
    Button,
    DataText,
    Result,
    ResultBox,
    Text,
} from './ResultStats.styled';
import s from './ResultStats.module.css';
import StatsTime from '../StatsTime/StatsTime';

const ResultStats = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = useState(0);
    return (
        <HomeRes>
            <WidthPlan>
                <Result>Results</Result>
                <ResultBox>
                    <TwoBox>
                        <Text>
                            <DataText>
                                Date
                                <DatePicker
                                    className={s.Mango}
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={new Date()}
                                    maxDate={addMonths(new Date(), 5)}
                                    showDisabledMonthNavigation
                                />
                            </DataText>
                        </Text>
                        <Text>
                            <DataText>
                                <SkillPage>Number of pages</SkillPage>
                                <Input
                                    type="number"
                                    value={state}
                                    onChange={e => {
                                        setState(Number(e.target.value));
                                    }}
                                />
                            </DataText>
                        </Text>
                    </TwoBox>
                    <Button type="submit">Add result</Button>
                </ResultBox>
                <StatsTime />
            </WidthPlan>
        </HomeRes>
    );
};

export default ResultStats;

import React from 'react';
import QuestionsContainer from './styles/QuestionsContainer';
import { Box } from '@material-ui/core';
import Question from './Question';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
    questionsColumn: {
        minWidth: "49%",
        maxWidth: "49%",
    }

}));

export default function Form({ statusHandler, error }) {
    const classes = useStyles();


    return (
        <QuestionsContainer>
            <Box
                className={classes.questionsColumn}>
                <Question
                    question={"1. Niepotrzebne urządzenia, narzędzia zostały usunięte"}
                    label={"sortSection"}
                    name={"answer1"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"2. Nie ma niepotrzebnych/nieużywanych zasobów, części lub materiałów"}
                    label={"sortSection"}
                    name={"answer2"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"3. Przejścia, miejsca pracy, umiejscowienie sprzętu są zaznaczone"}
                    label={"setInOrderSection"}
                    name={"answer3"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"4. Limity wysokości i ilości są oczywiste"}
                    label={"setInOrderSection"}
                    name={"answer4"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"5. Podłogi, ściany, schody i powierzchnie nie są ubrudzone olejem, smarem, etc"}
                    label={"shineSection"}
                    name={"answer5"}
                    func={statusHandler}
                    error={error} />
            </Box>
            <Box
                className={classes.questionsColumns}>
                <Question
                    question={"6. Materiały czyszczące są łatwo dostępne"}
                    label={"shineSection"}
                    name={"answer6"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"7. Standardy są znane i widoczne"}
                    label={"standarizeSection"}
                    name={"answer7"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"8. Istnieją listy kontrolne dla wszystkich prac porządkowych i konserwacyjnych"}
                    label={"standarizeSection"}
                    name={"answer8"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"9. Wszyscy pracownicy przeszli szkolenie 5S"}
                    label={"sustainSection"}
                    name={"answer9"}
                    func={statusHandler}
                    error={error} />
                <Question
                    question={"10. Wszystkie materiały i procedury są dostępne i aktualne"}
                    label={"sustainSection"}
                    name={"answer10"}
                    func={statusHandler}
                    error={error} />
            </Box>
        </QuestionsContainer>
    )
}

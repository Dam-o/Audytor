import React from 'react';
import { Box } from '@material-ui/core';
import Question from './Question';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    questionsColumn: {
        minWidth: "49%",
        maxWidth: "49%",
    }

}));

export default function QuestionsColumnLeft({ statusHandler, error }) {
    const classes = useStyles();

    return (
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
    )
}

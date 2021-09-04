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
export default function QuestionsColumnRight({ statusHandler, error }) {
    const classes = useStyles();

    return (
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
    )
}

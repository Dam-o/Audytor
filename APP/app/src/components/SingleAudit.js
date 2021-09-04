import React, { useState } from 'react'
import { Button, Typography, FormControl, Box, TextField, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import QuestionsContainer from './styles/QuestionsContainer';
import Error from './Error';
import Question from './Question';

const useStyles = makeStyles(() => ({
    text: {
        color: "#3f51b5"
    },

    icon: {
        verticalAlign: "middle",
        marginLeft: 10
    },

    input: {
        marginBottom: 25,
        maxWidth: "49%",
    },

    questionsColumn: {
        minWidth: "49%",
        maxWidth: "49%",
    }

}));

export default function SingleAudit({ name, id }) {
    const classes = useStyles();
    const [info, setInfo] = useState({
        lastAudit: "",
        who: ""
    });
    const [status, setStatus] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: ""

    });

    const [nameError, setNameError] = useState({});
    const [dateError, setDateError] = useState({});
    const [radioError, setRadioError] = useState({});

    const validate = () => {
        const nameError = {};
        const radioError = {};
        const dateError = {};
        let isValid = true;

        if (info.who.trim().length < 3) {
            nameError.shortname = "Podane imię jest zbyt krótkie";
            isValid = false;
        }

        if (info.who.trim().length > 40) {
            nameError.longname = "Podane imię jest zbyt długie";
            isValid = false;
        }

        if (info.lastAudit.length === 0) {
            dateError.nodate = "Musisz wybrać datę";
            isValid = false;
        }

        Object.keys(status).forEach(key => {
            if (status[key].length === 0) {
                radioError.empty = "Wybierz jedno";
                isValid = false;
            }
        })

        setDateError(dateError);
        setRadioError(radioError);
        setNameError(nameError);
        return isValid;
    };

    const addAudit = (id) => {
        fetch(`https://sliiter-fake-api.herokuapp.com/slitter/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                lastAudit: info.lastAudit,
                status: status,
                who: info.who
            })

        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    };

    const onSubmit = () => {
        const isValid = validate();
        if (isValid) {
            addAudit(id);
        } else {
            console.log("error")
        }
    };

    const infoHandler = (e) => {
        const { name, value } = e.target;
        setInfo(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const statusHandler = (e) => {
        const { name, value } = e.target;
        setStatus(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const showRadioError =
        Object.keys(radioError).map((key) => {
            return (
                <Error
                    key={key}
                    name={radioError[key]} />
            )
        });


    return (

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography
                    variant="h4"
                    className={classes.text}>
                    {name}
                    <Typography
                        variant="body1">
                        Kliknij by przeprowadzić audyt
                    </Typography>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl
                    component="fieldset"
                >
                    <TextField
                        className={classes.input}
                        name="who"
                        label="Podaj imię"
                        onChange={infoHandler}
                    ></TextField>
                    {Object.keys(nameError).map((key) => {
                        return (
                            <Error
                                key={key}
                                name={nameError[key]} />
                        )
                    })}
                    <TextField
                        className={classes.input}
                        name="lastAudit"
                        type="date"
                        onChange={infoHandler}
                    />
                    {Object.keys(dateError).map((key) => {
                        return (
                            <Error
                                key={key}
                                name={dateError[key]} />
                        )
                    })}
                    <QuestionsContainer>
                        <Box
                            className={classes.questionsColumn}>
                            <Question
                                question={"1. Niepotrzebne urządzenia, narzędzia zostały usunięte"}
                                label={"sortSection"}
                                name={"answer1"}
                                func={statusHandler}
                                error={showRadioError}
                            />
                            <Question
                                question={"2. Nie ma niepotrzebnych/nieużywanych zasobów, części lub materiałów"}
                                label={"sortSection"}
                                name={"answer2"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"3. Przejścia, miejsca pracy, umiejscowienie sprzętu są zaznaczone"}
                                label={"setInOrderSection"}
                                name={"answer3"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"4. Limity wysokości i ilości są oczywiste"}
                                label={"setInOrderSection"}
                                name={"answer4"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"5. Podłogi, ściany, schody i powierzchnie nie są ubrudzone olejem, smarem, etc"}
                                label={"shineSection"}
                                name={"answer5"}
                                func={statusHandler}
                                error={showRadioError} />
                        </Box>
                        <Box
                            className={classes.questionsColumns}>
                            <Question
                                question={"6. Materiały czyszczące są łatwo dostępne"}
                                label={"shineSection"}
                                name={"answer6"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"7. Standardy są znane i widoczne"}
                                label={"standarizeSection"}
                                name={"answer7"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"8. Istnieją listy kontrolne dla wszystkich prac porządkowych i konserwacyjnych"}
                                label={"standarizeSection"}
                                name={"answer8"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"9. Wszyscy pracownicy przeszli szkolenie 5S"}
                                label={"sustainSection"}
                                name={"answer9"}
                                func={statusHandler}
                                error={showRadioError} />
                            <Question
                                question={"10. Wszystkie materiały i procedury są dostępne i aktualne"}
                                label={"sustainSection"}
                                name={"answer10"}
                                func={statusHandler}
                                error={showRadioError} />
                        </Box>
                    </QuestionsContainer>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        onClick={onSubmit}>
                        Zapisz i prześlij
                    </Button>
                </FormControl>
            </AccordionDetails>
        </Accordion >
    )
}



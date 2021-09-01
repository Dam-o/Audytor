import React, { useState } from 'react'
import { Button, Typography, FormControl, Box, TextField, RadioGroup, Radio, FormControlLabel, FormLabel, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AuditCard from './styles/AuditCard';
import QuestionsContainer from './styles/QuestionsContainer';
import Error from './Error';

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

    radioGroup: {
        display: "inline-block",
        textAlign: "left"
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
        let isValid = true;

        if (info.who.trim().length < 3) {
            nameError.shortname = "Podane imię jest zbyt krótkie";
            isValid = false;
        }

        if (info.who.trim().length > 40) {
            nameError.longname = "Podane imię jest zbyt długie";
            isValid = false;
        }

        if (status.answer1.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer2.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer3.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer4.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer5.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer6.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer7.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer8.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer9.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        if (status.answer10.length === 0) {
            radioError.empty = "Wybierz jedno";
            isValid = false;
        }
        setRadioError(radioError);
        setNameError(nameError);
        return isValid;
    };

    const addAudit = (id) => {
        fetch(`http://localhost:3001/slitter/${id}`, {
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
                    <QuestionsContainer>
                        <Box
                            className={classes.questionsColumn}>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend"
                                >1. Niepotrzebne urządzenia, narzędzia zostały usunięte</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="sortSection"
                                    name="answer1"
                                    onChange={statusHandler}
                                >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">2. Nie ma niepotrzebnych/nieużywanych zasobów, części lub materiałów</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="sortSection"
                                    name="answer2"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">3. Przejścia, miejsca pracy, umiejscowienie sprzętu są zaznaczone</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="setInOrderSection"
                                    name="answer3"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">4. Limity wysokości i ilości są oczywist</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="setInOrderSection"
                                    name="answer4"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">5. Podłogi, ściany, schody i powierzchnie nie są ubrudzone olejem, smarem, etc</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="shineSection"
                                    name="answer5"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                        </Box>
                        <Box
                            className={classes.questionsColumns}>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">6. Materiały czyszczące są łatwo dostępne</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="shineSection"
                                    name="answer6"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">7. Standardy są znane i widoczne</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="standarizeSection"
                                    name="answer7"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">8. Istnieją listy kontrolne dla wszystkich prac porządkowych i konserwacyjnyh</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="standarizeSection"
                                    name="answer8"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">9. Wszyscy pracownicy przeszli szkolenie 5S</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="sustainSection"
                                    name="answer9"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
                            <AuditCard>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">10. Wszystkie materiały i procedury są dostępne i aktualne </FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="sustainSection"
                                    name="answer10"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                                {Object.keys(radioError).map((key) => {
                                    return (
                                        <Error
                                            key={key}
                                            name={radioError[key]} />
                                    )
                                })}
                            </AuditCard>
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
        </Accordion>
    )
}

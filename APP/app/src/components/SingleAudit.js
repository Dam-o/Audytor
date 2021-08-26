import React, { useState } from 'react'
import { Button, Card, Typography, FormControl, TextField, RadioGroup, Radio, FormControlLabel, FormLabel, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
    card: {
        minHeight: 100,
        maxHeight: 100,
        padding: 15,
        marginBottom: 10
    },


    text: {
        color: "#3f51b5"
    },

    icon: {
        verticalAlign: "middle",
        marginLeft: 10
    },

    input: {
        marginBottom: 25
    },

    radioGroup: {
        display: "inline-block",
        textAlign: "left"
    },

    questions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    questionsOne: {
        minWidth: "49%",
        maxWidth: "49%",
    },

    questionsTwo: {
        minWidth: "49%",
        maxWidth: "49%",
    }
}));


export default function SingleAudit({ name, id, getMachins }) {
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

    })


    const url = "https://my-json-server.typicode.com/Dam-o/slitter/slitter";

    const machins = () => {
        if (typeof getMachins === "function") {
            getMachins();
        }
    };

    const addAudit = (id) => {
        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                lastAudit: info.lastAudit,
                status: status,
                who: info.who
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => machins())
            .catch(err => console.log(err))
    };

    const infoHandler = (e) => {
        const { name, value } = e.target;
        setInfo(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }



    const statusHandler = (e) => {
        const { name, value } = e.target;
        setStatus(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }


    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
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
                    />
                    <TextField
                        className={classes.input}
                        name="lastAudit"
                        type="date"
                        onChange={infoHandler}
                    />
                    <div
                        className={classes.questions}>
                        <div
                            className={classes.questionsOne}>
                            <Card
                                className={classes.card}>
                                <FormLabel
                                    className={classes.formHelper}
                                    component="legend">1. Niepotrzebne urządzenia, narzędzia zostały usunięte</FormLabel>
                                <RadioGroup
                                    className={classes.radioGroup}
                                    aria-label="sortSection"
                                    name="answer1"
                                    onChange={statusHandler} >
                                    <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                                    <FormControlLabel value="fail" control={<Radio />} label="Nie" />
                                </RadioGroup>
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                        </div>
                        <div
                            className={classes.questionsTwo}>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                            <Card
                                className={classes.card}>
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
                            </Card>
                        </div>

                    </div>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        onClick={() => addAudit(id)}>
                        Zapisz i prześlij
                    </Button>
                </FormControl>
            </AccordionDetails>
        </Accordion>


    )
}

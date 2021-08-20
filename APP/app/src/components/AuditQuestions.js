import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';

const useStyles = makeStyles(() => ({

    questions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    questionsOne: {
        minWidth: "48%",
        maxWidth: "48%"
    },

    questionsTwo: {
        minWidth: "48%",
        maxWidth: "48%"
    },


    card: {
        padding: "20px 50px",
        marginBottom: 15,
        minHeight: 125,
        maxHeight: 125
    },

    formHelper: {
        marginBottom: 15
    },

    radioGroup: {
        display: "inline"
    },


    date: {
        minWidth: 200
    },

    button: {
        marginTop: 15,
    }


}));


export default function AuditQuestions({ name, auditDate, id, slitters }) {
    const classes = useStyles();
    const [check, setCheck] = useState({
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

    const url = "https://my-json-server.typicode.com/Dam-o/slitter/slitter";

    const slitting = () => {
        if (typeof slitters === "function") {
            slitters();
        }
    }




    const dataHandler = (e) => {
        const { name, value } = e.target;
        setCheck(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const addAudit = () => {
        fetch(`${url}/1`, {
            method: "PUT",
            body: JSON.stringify({
                lastAudit: "2019.01.21",
                who: "Damian",

            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => slitting())
            .catch(err => console.log(err))
    };


    return (
        <div>
            <FormControl>
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
                                onChange={dataHandler}
                            >
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
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
                                onChange={dataHandler}>
                                <FormControlLabel value="1" control={<Radio />} label="Tak" />
                                <FormControlLabel value="0" control={<Radio />} label="Nie" />
                            </RadioGroup>
                        </Card>
                    </div>

                </div>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={addAudit}>
                    Zapisz i prześlij
                </Button>
            </FormControl>

        </div >
    )
}

import React, { useState } from 'react'
import { Button, FormControl, Accordion, AccordionDetails } from "@material-ui/core";
import QuestionsContainer from './styles/QuestionsContainer';
import Error from './Error';
import QuestionsColumnLeft from './QuestionsColumnLeft';
import NameAndDate from './NameAndDate';
import QuestionsColumnRight from './QuestionsColumnRight';
import Success from './Success';
import AccordionHeader from './AccordionHeader';


export default function SingleAudit({ name, id }) {

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
    const [success, setSuccess] = useState(false);

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

        if (/[^a-zA-Z]/.test(info.who.trim())) {
            nameError.wrongtype = "Imię może zawierać tylko litery";
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
            setSuccess(!success);
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

    const showError = (error) => {
        return Object.keys(error).map((key) => {
            return (
                <Error
                    key={key}
                    name={error[key]} />
            )
        })
    };

    return (
        <>
            <Accordion>
                <AccordionHeader
                    text={"Kliknij by przeprowadzić audyt "}
                    name={name} />
                <AccordionDetails>
                    <FormControl
                        component="fieldset"
                    >
                        <NameAndDate
                            handler={infoHandler}
                            nameError={showError(nameError)}
                            dateError={showError(dateError)}
                        />
                        <QuestionsContainer>
                            <QuestionsColumnLeft
                                statusHandler={statusHandler}
                                error={showError(radioError)} />
                            <QuestionsColumnRight
                                statusHandler={statusHandler}
                                error={showError(radioError)} />
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
            {success && <Success />}
        </>
    )
}



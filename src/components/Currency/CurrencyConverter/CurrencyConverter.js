/**
 * Currency Converter Component
 * @author Ganesh Khutwad.
 */
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { CURRENCY_LIST } from '../../../constants/currency';

import styles from './CurrencyConverter.module.css';

const schema = yup.object({
    sourceCurrency: yup.string().required(),
    sourceAmount: yup
        .string()
        .required('Field Is Required.')
        .test(
            'sourceAmount',
            'Only Valid Amount Is Allowed.',
            value => Number(value) > 0
        ),
    outputCurrency: yup.string().required(),
});

const CurrencyConverter = props => {
    return (
        <Jumbotron className={styles.Container}>
            <Formik
                validationSchema={schema}
                onSubmit={props.convertCurrency}
                initialValues={{
                    sourceAmount: '',
                    sourceCurrency: 'USD',
                    outputCurrency: 'USD',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Source Currency</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Form.Control
                                        as="select"
                                        className={styles.CurrencyList}
                                        name="sourceCurrency"
                                        data-testid="sourceCurrency"
                                        value={values.sourceCurrency}
                                        onChange={handleChange}
                                    >
                                        {CURRENCY_LIST.map(currency => (
                                            <option
                                                key={currency.value}
                                                value={currency.value}
                                            >
                                                {currency.label}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="sourceAmount"
                                    data-testid="sourceAmount"
                                    value={values.sourceAmount}
                                    onChange={handleChange}
                                    isValid={
                                        touched.sourceAmount &&
                                        !errors.sourceAmount
                                    }
                                ></Form.Control>
                            </InputGroup>
                            <ErrorMessage name="sourceAmount">
                                {message => (
                                    <div
                                        data-testid="sourceAmountErrorMsg"
                                        className={styles.ErrorMessage}
                                    >
                                        {message}
                                    </div>
                                )}
                            </ErrorMessage>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Output Currency</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <Form.Control
                                        as="select"
                                        className={styles.CurrencyList}
                                        name="outputCurrency"
                                        value={values.outputCurrency}
                                        onChange={handleChange}
                                        data-testid="outputCurrency"
                                    >
                                        {CURRENCY_LIST.map(currency => (
                                            <option
                                                key={currency.value}
                                                value={currency.value}
                                            >
                                                {currency.label}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    value={props.outputAmount}
                                    data-testid="outputAmount"
                                    disabled
                                ></Form.Control>
                            </InputGroup>
                        </Form.Group>
                        <Button data-testid="convertBtn" type="submit">
                            Convert
                        </Button>
                    </Form>
                )}
            </Formik>
        </Jumbotron>
    );
};

export default CurrencyConverter;

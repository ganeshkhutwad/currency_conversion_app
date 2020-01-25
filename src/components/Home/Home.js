import React, { Fragment, useState, useEffect } from 'react';
import CurrencyConverter from '../Currency/CurrencyConverter/CurrencyConverter';
import CurrencyHistory from '../Currency/CurrencyHistory/CurrencyHistory';
import PropTypes from 'prop-types';
import Toast from 'react-bootstrap/Toast';

const Home = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (props.isError) {
            setShow(props.isError);
        }
    }, [props.isError]);

    return (
        <Fragment>
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
                autohide
            >
                <Toast.Header style={{ backgroundColor: '#f00' }}>
                    <strong style={{ color: '#fff' }} className="mr-auto">
                        Error
                    </strong>
                </Toast.Header>
                <Toast.Body>{props.errorMessage}</Toast.Body>
            </Toast>
            <CurrencyConverter
                convertCurrency={props.actions.convertCurrency}
                outputAmount={props.outputAmount}
            ></CurrencyConverter>
            <CurrencyHistory></CurrencyHistory>
        </Fragment>
    );
};

export default Home;

Home.propTypes = {
    actions: PropTypes.shape({
        convertCurrency: PropTypes.func.isRequired,
    }).isRequired,
    outputAmount: PropTypes.string.isRequired,
};

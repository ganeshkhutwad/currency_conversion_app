/**
 * Home Container
 * @author Ganesh Khutwad.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

import * as actions from '../../redux/actions/homeActions.js';

const mapStateToProps = state => {
    return {
        outputAmount: state.home.convertedCurrencyValue,
        isError: state.home.isError,
        errorMessage: state.home.errorMessage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;

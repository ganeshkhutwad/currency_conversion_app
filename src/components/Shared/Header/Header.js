import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => <h3 className={styles.HeaderText}>{title}</h3>;

export default Header;

Header.propTypes = { title: PropTypes.string.isRequired };

import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');

    const getCurrencyName = (val) => {
        switch (val) {
            case '$':
                return '$ Dollar';
            case '£':
                return '£ Pound';
            case '€':
                return '€ Euro';
            case '₹':
                return '₹ Ruppee';
            default:
                return '';
        }
    };
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
        setSelectedCurrency(getCurrencyName(val));
    };
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" className="p-3" id="dropdown-basic">
                Currency: {selectedCurrency}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLocation('$')} active={selectedCurrency === '$ Dollar'}>$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('£')} active={selectedCurrency === '£ Pound'}>£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('€')} active={selectedCurrency === '€ Euro'}>€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('₹')} active={selectedCurrency === '₹ Ruppee'}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Currency;
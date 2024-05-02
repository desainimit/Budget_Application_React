import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';

const Currency = (props) => {
    const { dispatch } = useContext(AppContext);
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    };
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Currency: {props.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLocation('$')}>$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('£')}>£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('€')}>€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLocation('₹')}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Currency;
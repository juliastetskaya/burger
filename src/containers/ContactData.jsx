import React, { useState } from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'react-router-dom';

import axios from '../axios';
import { SuccessButton } from '../components/UI/Button';
import Spinner from '../components/UI/Spinner';

const ContactDataStyled = styled.div`
    margin: 20px auto;
    width: 80%;
    text-align: center;
    box-shadow: 0 2px 3px #ccc;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 500px;
    }
`;

const InputStyled = styled.input`
    display: block;
`;

const ContactData = ({ ingredients, price, history }) => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    });

    const handleOrder = (event) => {
        event.preventDefault();
        const order = {
            ingredients,
            price,
            customer: {
                name: 'John Smith',
                address: {
                    street: 'Broadway',
                    zipCode: '358102',
                    country: 'USA'
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest',
        };

        setLoading(true);
        axios.post('orders.json', order)
            .then(() => {
                setLoading(false);
                history.push('/');
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return loading
        ? <Spinner />
        : (
            <ContactDataStyled>
                <h4>Enter your Contact Data</h4>
                <form>
                    <InputStyled type="text" name="name" placeholder="Your Name" />
                    <InputStyled type="email" name="email" placeholder="Your Mail" />
                    <InputStyled type="text" name="street" placeholder="Street" />
                    <InputStyled type="text" name="postal" placeholder="Postal Code" />
                    <SuccessButton clicked={handleOrder}>ORDER</SuccessButton>
                </form>
            </ContactDataStyled>
        )
};

export default withRouter(ContactData);

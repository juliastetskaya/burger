import React, { useState } from 'react';
import styled from '@emotion/styled';

import { SuccessButton } from '../components/UI/Button';

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

const ContactData = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
    });

    return (
        <ContactDataStyled>
            <h4>Enter your Contact Data</h4>
            <form>
                <InputStyled type="text" name="name" placeholder="Your Name" />
                <InputStyled type="email" name="email" placeholder="Your Mail" />
                <InputStyled type="text" name="street" placeholder="Street" />
                <InputStyled type="text" name="postal" placeholder="Postal Code" />
                <SuccessButton>ORDER</SuccessButton>
            </form>
        </ContactDataStyled>
    )
};

export default ContactData;

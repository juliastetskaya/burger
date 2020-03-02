import React from 'react';
import styled from '@emotion/styled';

import BuildControl from './BuildControl';

const WrapperStyled = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
`;

const CONTROLS = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


const BuildControls = ({ ingredientAdded, ingredientRemoved, disabledInfo }) => (
    <WrapperStyled>
        {
            CONTROLS.map(({ label, type }) => <BuildControl
                key={label}
                label={label}
                added={() => ingredientAdded(type)}
                removed={() => ingredientRemoved(type)}
                disabled={disabledInfo[type]}
            />)
        }
    </WrapperStyled>
);

export default BuildControls;

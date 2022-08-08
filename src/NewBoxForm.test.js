import React from 'react';
import {render} from '@testing-library/react'
import NewBoxForm from './NewBoxForm';

it('does not crash', () => {
    render(<NewBoxForm/>)
})
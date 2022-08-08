import React from 'react';
import {render} from '@testing-library/react'
import BoxList from './BoxList';

it('Does not crash', () => {
    render(<BoxList/>)
})

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})
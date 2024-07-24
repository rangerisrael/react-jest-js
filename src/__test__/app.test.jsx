import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('should rener app', () => {
    render(<App/>)

    let label = screen.getByText(/Testing jest/i);
    expect(label).toBeInTheDocument();
})

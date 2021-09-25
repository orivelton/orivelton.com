import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from './Avatar.tsx'

test("Render Avatar component", () => {
    render(<Avatar />)
    screen.logTestingPlaygroundURL()
});

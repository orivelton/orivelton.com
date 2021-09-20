import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'

test("Render Avatar component", () => {
    render(<Avatar />)
    screen.logTestingPlaygroundURL()
})

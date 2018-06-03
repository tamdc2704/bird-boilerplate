import React from 'react'
import App from '../src/components/App'
import { shallow } from 'enzyme'

describe('App', () => {
    test('should map snapshot', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('h1').text()).toBe('Welcome to my app')
        expect(wrapper).toMatchSnapshot
    })
})
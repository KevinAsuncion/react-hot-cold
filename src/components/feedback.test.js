import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', ()=>{
    it('Should render without crashing', ()=>{
        shallow(<Feedback/>)
    })
    it('Should render feedback correctly', ()=>{
        let TEST_FEEDBACK = 'Feedback'
        let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK}/>)
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    })
})
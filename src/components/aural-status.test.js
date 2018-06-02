import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Should render wihtout crashing', ()=>{
        shallow(<AuralStatus/>)
    })
    it('Renders an aural status', ()=>{
        let TEST_STATUS = 'Testing status'
        let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS}/>)
        expect(wrapper.contains(TEST_STATUS)).toEqual(true);
    })
})
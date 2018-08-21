import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TextView from '../../components/TextView';

describe('TextView component testing', function () {
    it('renders label', function () {
        debugger;
        const wrapper = mount(<TextView>Hello World!</TextView>);
        debugger;
        expect(wrapper.find('.text-view')).to.have.length(1);
    });
});
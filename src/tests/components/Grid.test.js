import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Grid from '../../components/Grid';
import TextView from '../../components/TextView';

describe('Grid component testing', function () {
    it('renders TextView message', function () {
        const wrapper = mount(<Grid>World!</Grid>);
        expect(wrapper.find(TextView)).to.have.length(1);

        const text = wrapper.find(TextView).text();
        debugger;
        expect(text).to.equals("Hello World!");
    });
});
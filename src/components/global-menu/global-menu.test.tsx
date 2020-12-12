import React from 'react';
import { shallow } from 'enzyme';
import GlobalMenu from './global-menu';

const app = () => {
    const wrapper = shallow(<GlobalMenu />);
    return { wrapper };
};

describe('Global Menu', () => {
    it('should render snapshot', () => {
        const { wrapper } = app();
        expect(wrapper).toMatchSnapshot();
    });
});

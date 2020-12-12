import React from 'react';
import { shallow } from 'enzyme';
import Issues from './issues';

const app = () => {
    const wrapper = shallow(<Issues />);
    return { wrapper };
};

describe('Issues', () => {
    it('should render snapshot', () => {
        const { wrapper } = app();
        expect(wrapper).toMatchSnapshot();
    });
});

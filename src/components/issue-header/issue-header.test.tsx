import React from 'react';
import { shallow } from 'enzyme';
import IssueHeader from './issue-header';

const app = () => {
    const wrapper = shallow(<IssueHeader setFilter={()=>{}} />);
    return { wrapper };
};

describe('Issue Header', () => {
    it('should render snapshot', () => {
        const { wrapper } = app();
        expect(wrapper).toMatchSnapshot();
    });
});

import React from 'react';
import TopNav from 'components/global-menu/top-navigation';

interface IGlobalMenu {
    children?: React.ReactNode;
}

const GlobalMenu = (props: IGlobalMenu) => {
    return (
        <React.Fragment>
            <TopNav/>
            {props.children}
        </React.Fragment>
    );
};

export default GlobalMenu;

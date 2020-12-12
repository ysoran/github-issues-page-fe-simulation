import React from 'react';
import history from 'utils/history';
import { Button, Container } from 'semantic-ui-react'
import styled from 'styled-components';

const NotFound = () => {
    const onClick = () => {
        history.push('/');
    };

    const StyledContainer = styled(Container)`
        padding: 50px;
    `;

    return (
        <Container>
            <StyledContainer textAlign="center" >page not found</StyledContainer>
            <Container textAlign="center">
                {
                    <Button onClick={onClick}>go back home</Button>
                }
            </Container>
        </Container>
    );
};

export default NotFound;

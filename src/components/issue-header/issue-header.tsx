import React, {useState} from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import WarnIcon from 'shared-components/icons/warn-icon';
import CompleteIcon from 'shared-components/icons/complete-icon';
import primary from 'shared-components/colors/primary';

interface ITab{
    selected: boolean;
}

interface IIssueHeader{
    setFilter: any;
}

const StyledHeader = styled.div`
    padding: 20px;
    border-top: 1px solid ${primary.border};
    border-left: 1px solid ${primary.border};
    border-right: 1px solid${primary.border};
    border-radius: 10px 10px 0 0;
    background-color: ${primary.background} !important;
`;

const StyledLeft = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const StyledRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledTab= styled.span<ITab>`
    margin-right:20px;
    margin-left: -6px;
    font-size: 15px;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};
    cursor: pointer;
    display:flex;
`;

const StyledIconWrapper= styled.span`
    margin-top:1px;
    margin-right:8px;
`;

const IssueHeader = (props: IIssueHeader) => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [openIssuesCount, setOpenIssuesCount] = useState(null);
    const [closedIssuesCount, setClosedIssuesCount] = useState(null);
    const fetchClosedCount = React.useCallback(() => {
        axios.get("https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:closed")
        .then((response) => {
            setClosedIssuesCount(response.data.total_count);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

     const fetchOpenCount = React.useCallback(() => {
        axios.get("https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open")
        .then((response) => {
            setOpenIssuesCount(response.data.total_count);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    React.useEffect(() => {
        fetchOpenCount();
        fetchClosedCount();
    }, [fetchOpenCount,fetchClosedCount])

    const tabOpenHandler = () => {
        setSelectedTab(1);
        props.setFilter({state: "open"});
    }
    const tabClosedHandler = () => {
        setSelectedTab(2);
        props.setFilter({state: "closed", label: "bug"});
    }
    
    return(
        <StyledHeader>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <StyledLeft>
                            <StyledTab onClick={tabOpenHandler} selected={selectedTab===1}><StyledIconWrapper><WarnIcon/></StyledIconWrapper>{openIssuesCount} Open</StyledTab>
                            <StyledTab onClick={tabClosedHandler} selected={selectedTab===2}><StyledIconWrapper><CompleteIcon/></StyledIconWrapper>{closedIssuesCount} Closed</StyledTab>
                        </StyledLeft>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <StyledRight>
                        </StyledRight>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledHeader>
    );
}

export default IssueHeader;
import React, {useState} from 'react';
import axios from 'axios';
import IssueRow from 'components/issue-row/issue-row';
import IssueHeader from 'components/issue-header/issue-header';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

interface ILabel{
    id:number;
    node_id: string;
    url:string;
    name:string;
    color:string;
    description: string;
    default?: any;
}
interface IUser{
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

interface IIssuesResponse{
    active_lock_reason: string | null;
    assignee: IUser | null;
    assignees: Array<string>;
    author_association: string;
    body: string;
    closed_at: string;
    comments: number;
    comments_url: string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: number;
    labels: Array<ILabel>;
    labels_url: string;
    locked: boolean;
    milestone: string | null;
    node_id: string;
    number: number;
    performed_via_github_app: string | null;
    repository_url: string;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: IUser;
    pull_request?: any;
    score?: number;
}

const StyledContainer = styled(Container)`
    margin-top:20px;
`;

const Issues = () => {
    const [selected, setSelected] = useState(-1);
    const [requestData, setRequestData] = useState({state: "open"});
    let [responseData, setResponseData] = React.useState([] as Array<IIssuesResponse>);
    const fetchData = React.useCallback(() => {
        axios({
            method: "GET",
            url: "https://api.github.com/repos/facebook/react/issues",
            params: requestData,
            headers: {
                "content-type": "application/json",
            }
        })
        .then((response) => {
            setResponseData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [requestData])

    React.useEffect(() => {
        fetchData()
    }, [fetchData])

    const renderData = (data: Array<IIssuesResponse>) => {
        return data.map((each: IIssuesResponse,i: number)=>{
            return(
                <div key={i} onMouseOver={()=>setSelected(i)}>
                    <IssueRow selected={selected===i} {...each} />
                </div>
            )
        })
    }

    return (
        <StyledContainer>
            <IssueHeader setFilter={setRequestData}/>
            {renderData(responseData)}
        </StyledContainer>
    );
}

export default Issues;
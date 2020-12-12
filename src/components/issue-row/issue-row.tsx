import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import WarnIcon from 'shared-components/icons/warn-icon';
import MessageIcon from 'shared-components/icons/message-icon';
import CompleteIcon from 'shared-components/icons/complete-icon';
import PullIcon from 'shared-components/icons/pull-icon';
import primary from 'shared-components/colors/primary';
import calculatedTime from 'utils/calculate-time';
import isLightColor from 'utils/is-light-color';

interface ILabel{
    id:number;
    node_id: string;
    url:string;
    name:string;
    color:string;
    description: string;
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

interface IIssueRow{
    active_lock_reason: string;
    assignee: IUser;
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
    selected?: boolean;
}

interface IInlineColumn{
    color: string;
    key: number;
}

interface IStyledRow{
    selected: boolean;
}
const StyledRow = styled.div<IStyledRow>`
    padding: 10px;
    border-top: 1px solid ${primary.border};
    border-left: 1px solid ${primary.border};
    border-right: 1px solid ${primary.border};
    border-radius: 0;
    background-color: ${props=>props.selected ? primary.background : primary.white};
`;

const StyledInlineRow = styled.div`
    max-width: '870px';
    display: flex;
`;

const StyledInlineRowLabels = styled.span`
    white-space: nowrap;
    max-width: '870px';
    display:inline;
    margin-left: 3px;
    :hover{
        cursor: pointer;
    }
`;

const StyledInlineRowTitle = styled.span`
    max-width: '870px';
    font-size: 17px !important;
    line-height: 1.5;
    font-weight: 600;
    :hover{
        color: ${primary.berry};
        cursor: pointer;
    }
`;

const StyledInlineColumn = styled.span<IInlineColumn>`
    background-color: ${ props => '#'+props.color};
    color: ${props => isLightColor(props.color) ? 'black' : 'white'};
    padding: 0 7px;
    font-size: 13px;
    font-weight: 900;
    line-height: 18px;
    border: 1px solid transparent;
    border-radius: 2em;
    margin-left: 3px;
    padding-bottom: 1px;
`;

const StyledFooter = styled.div`
    font-size: 12px;
    color: ${primary.gray};
`;

const renderLabel = (labels: Array<ILabel>) => {
    return labels.map((each: ILabel, i : number)=>{
        return <StyledInlineColumn key={i} color={each.color}>{each.name}</StyledInlineColumn>
    })
}

const StyledInfo = styled.span`
    padding: 3px;
    margin-right: 5px;
`;

const StyledWrapper = styled.div`
    margin-top: 3px;
    display:flex;
    justify-content: flex-end;
    cursor: pointer;
`;

const StyledComments= styled.span`
    font-size: 12px !important;
    font-weight: bold;
    margin-top: -3px;
    margin-left: 4px;
    text-align: right;
`;

const StyledImgContainer= styled.div`
    border-radius: 100%;
    overflow:hidden;
`;

const IssueRow = (props: IIssueRow) => {
    return (
        <StyledRow selected={props.selected}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <StyledInlineRow>
                            <StyledInfo>
                                { props.state==='open' && <WarnIcon/>}
                                { props.state==='closed' && <CompleteIcon/>}
                            </StyledInfo>
                            <div>
                                <div>
                                    <StyledInlineRowTitle>
                                        {props.title}
                                    </StyledInlineRowTitle>
                                    <StyledInlineRowLabels>
                                        {renderLabel(props.labels)}
                                    </StyledInlineRowLabels>
                                </div>
                                <div>
                                    <StyledFooter>
                                        {'#'+props.number+' opened '+calculatedTime(props.created_at)+' ago by '+props.user.login}
                                    </StyledFooter>
                                </div>
                            </div>
                        </StyledInlineRow>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5} textAlign="right">
                                    <StyledWrapper>
                                        {props.pull_request ? <PullIcon/> : ''}
                                        <StyledComments>{props.pull_request ? '1' : ''}</StyledComments>
                                    </StyledWrapper>
                                </Grid.Column>
                                <Grid.Column width={5} textAlign="right">
                                    <StyledWrapper>
                                        {props.assignee && props.assignee.avatar_url && <StyledImgContainer><img style={{'width':'20px'}} src={props.assignee.avatar_url}/></StyledImgContainer>}
                                    </StyledWrapper>
                                </Grid.Column>
                                <Grid.Column width={5} textAlign="right">
                                    <StyledWrapper>
                                        {props.comments ? <MessageIcon/> : ''}
                                        <StyledComments>{props.comments ? props.comments : ''}</StyledComments>
                                    </StyledWrapper>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledRow>
    );
}

export default IssueRow;
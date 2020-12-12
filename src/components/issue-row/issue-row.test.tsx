import React from 'react';
import { shallow } from 'enzyme';
import IssueRow from './issue-row';

const app = () => {
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

    interface IIssueRow{
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
        selected?: boolean;
        score?: number;
    }

    const input: IIssueRow = {
        "url": "https://api.github.com/repos/nodejs/node/issues/36494",
        "repository_url": "https://api.github.com/repos/nodejs/node",
        "labels_url": "https://api.github.com/repos/nodejs/node/issues/36494/labels{/name}",
        "comments_url": "https://api.github.com/repos/nodejs/node/issues/36494/comments",
        "events_url": "https://api.github.com/repos/nodejs/node/issues/36494/events",
        "html_url": "https://github.com/nodejs/node/issues/36494",
        "id": 764002876,
        "node_id": "MDU6SXNzdWU3NjQwMDI4NzY=",
        "number": 36494,
        "title": "dojo.io dojo create -n fapp",
        "user": {
            "login": "raphael-quadrini",
            "id": 58255273,
            "node_id": "MDQ6VXNlcjU4MjU1Mjcz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/58255273?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/raphael-quadrini",
            "html_url": "https://github.com/raphael-quadrini",
            "followers_url": "https://api.github.com/users/raphael-quadrini/followers",
            "following_url": "https://api.github.com/users/raphael-quadrini/following{/other_user}",
            "gists_url": "https://api.github.com/users/raphael-quadrini/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/raphael-quadrini/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/raphael-quadrini/subscriptions",
            "organizations_url": "https://api.github.com/users/raphael-quadrini/orgs",
            "repos_url": "https://api.github.com/users/raphael-quadrini/repos",
            "events_url": "https://api.github.com/users/raphael-quadrini/events{/privacy}",
            "received_events_url": "https://api.github.com/users/raphael-quadrini/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [
            {
            "id": 592511284,
            "node_id": "MDU6TGFiZWw1OTI1MTEyODQ=",
            "url": "https://api.github.com/repos/nodejs/node/labels/wrong%20repo",
            "name": "wrong repo",
            "color": "6a4636",
            "default": false,
            "description": "Issues that should be opened in another repository. This repository is for issues of Node.js core."
            }
        ],
        "state": "closed",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 4,
        "created_at": "2020-12-12T16:10:13Z",
        "updated_at": "2020-12-12T17:38:24Z",
        "closed_at": "2020-12-12T17:18:35Z",
        "author_association": "NONE",
        "active_lock_reason": null,
        "body": "<!--\r\nThank you for reporting an issue.\r\n\r\nThis issue tracker is for bugs and issues found within Node.js core.\r\nIf you require more general support please file an issue on our help\r\nrepo. https://github.com/nodejs/help\r\n\r\n\r\nPlease fill in as much of the template below as you're able.\r\n\r\nVersion: output of `node -v`\r\nPlatform: output of `uname -a` (UNIX), or output of `\"$([Environment]::OSVersion | ForEach-Object VersionString) $(if ([Environment]::Is64BitOperatingSystem) { \"x64\" } else { \"x86\" })\"` in PowerShell console (Windows)\r\nSubsystem: if known, please specify affected core module name\r\n-->\r\n\r\n[2020-12-12T15_32_15_627Z-debug.log](https://github.com/nodejs/node/files/5683340/2020-12-12T15_32_15_627Z-debug.log)\r\n\r\nnode -v : v14.15.1\r\nplateform :Linux superdini.quadrini.io 5.4.66 #1 SMP Thu Sep 17 12:39:00 CDT 2020 x86_64 Intel(R) Core(TM) i5 CPU       M 520  @ 2.40GHz GenuineIntel GNU/Linux\r\n* **Subsystem**: npm\r\n\r\n### What steps will reproduce the bug?\r\nnpm install -g @dojo/cli\r\nnpm install -g @dojo/cli-create-app\r\ndojo create app --name fapp\r\n\r\n<!--\r\nEnter details about your bug, preferably a simple code snippet that can be\r\nrun using `node` directly without installing third-party dependencies.\r\n-->\r\n\r\n### How often does it reproduce? Is there a required condition?\r\nalways.\r\n### What is the expected behavior?\r\ncreate a fapp folder : OK\r\ncreate the skeleton of fapp : OK\r\nshould copy the required modules to run the application using npm : KO\r\n\r\n<!--\r\nIf possible please provide textual output instead of screenshots.\r\n-->\r\n[2020-12-12T15_32_15_627Z-debug.log](https://github.com/nodejs/node/files/5683349/2020-12-12T15_32_15_627Z-debug.log)\r\n[Uploading 2020-12-12T15_32_15_627Z-debug.log…]()\r\n\r\n3827 silly saveTree └── typescript@3.4.5\r\n3828 verbose stack SyntaxError: Unexpected end of JSON input while parsing near '...stry.npmjs.org/stylel'\r\n3828 verbose stack     at JSON.parse (<anonymous>)\r\n3828 verbose stack     at parseJson (/usr/local/node-v14.15.1-linux-x64/lib/node_modules/npm/node_modules/json-parse-better-errors/index.js:7:17)\r\n3828 verbose stack     at /usr/local/node-v14.15.1-linux-x64/lib/node_modules/npm/node_modules/node-fetch-npm/src/body.js:96:50\r\n3828 verbose stack     at runMicrotasks (<anonymous>)\r\n3828 verbose stack     at processTicksAndRejections (internal/process/task_queues.js:93:5)\r\n3829 verbose cwd /root/dojo.io/fapp\r\n3830 verbose Linux 5.4.66\r\n3831 verbose argv \"/usr/local/node-v14.15.1-linux-x64/bin/node\" \"/usr/local/nodejs/bin/npm\" \"install\"\r\n3832 verbose node v14.15.1\r\n3833 verbose npm  v6.14.9\r\n3834 error Unexpected end of JSON input while parsing near '...stry.npmjs.org/stylel'\r\n3835 verbose exit [ 1, true ]\r\n\r\n\r\n### What do you see instead?\r\n\r\n<!--\r\nrunning npm install\r\nfailed npm install\r\nexit code :  1\r\n-->\r\n\r\n### Additional information\r\n\r\n<!--\r\nTell us anything else you think we should know.\r\n-->\r\n",
        "performed_via_github_app": null,
        "score": 1.0
        };
    const wrapper = shallow(<IssueRow {...input}/>);
    return { wrapper };
};

describe('Issue Row', () => {
    it('should render snapshot', () => {
        const { wrapper } = app();
        expect(wrapper).toMatchSnapshot();
    });
});

import { HttpClient } from "./helpers/httpClient.js"

const issueList = document.querySelector('#issueList')

const initApp = () => {
    listAllIssues()
}


const listAllIssues = async () => {

    // setInterval(fetchIssues, 50)
    fetchIssues()

}

const fetchIssues = async () => {
    const httpClient = new HttpClient();
    const result = await httpClient.get('issues');
    displayIssue(result);
}
 
const displayIssue = (issues) => {
    for(let issue of issues) {
        const div = document.createElement('div');
        const caption = document.createElement('span')
        const issueDate = document.createElement('span')
        const issuer = document.createElement('span')

        caption.textContent = issue.caption;
        issueDate.textContent = issue.issueDate;
        issuer.textContent = issue.email;

        div.appendChild(caption)
        div.appendChild(issueDate)
        div.appendChild(caption);
        issueList.appendChild(div)
    }

}

document.addEventListener('DOMContentLoaded', initApp)
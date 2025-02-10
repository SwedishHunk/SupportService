const initApp = () => {
    listAllIssues()
}


const listAllIssues = async () => {
    const url = 'https://issuesdb-b511.restdb.io/rest/issues'
    
    const response = await fetch(url, {
        headers: {
            'x-apikey':'67a9efe8020c064e18e653bd',
            'Content-Type': 'application/json',
        }
    });

    if(response.ok) {
        const data = await response.json()
        console.log(data)
    } else {
        console.log(response.status, response.statusText)
    }
}

document.addEventListener('DOMContentLoaded', initApp)
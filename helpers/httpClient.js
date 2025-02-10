export class HttpClient {
    constructor() {
        this._url = 'https://issuesdb-b511.restdb.io/rest/';
    }

    async get(endpoint) {
        try {
            const response = await fetch(this._url + endpoint, {
                headers: {
                    'x-apikey':'67a9efe8020c064e18e653bd',
                    'Content-Type': 'application/json',
                }
            })

            if(response.ok) {
                return await response.json()
            } else {
                throw new Error(`Felkod: ${response.status} Felmeddelande: ${response.statusText}`)
            }
        } catch (error) {
            throw new Error(error)
            
        }
    }

    async post(endpoint, data) {
        try {
            const response = await fetch (this._url + endpoint, {
                method: 'POST',
                headers: {
                    'x-apikey':'67a9efe8020c064e18e653bd',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if(response.ok) {
                return response.json();
            } else {
                throw new Error(
                    `Felkod: ${response.status} Felmeddelande: ${response.statusText}`
                )
            }
        } catch (error) {
            throw new Error(error);
            
        }
    }
}
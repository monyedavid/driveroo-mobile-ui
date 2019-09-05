import axios from "axios";

export class Google_Places {
    constructor(url, token) {
        this.url = url;
        this.rps = axios.create({
            headers: { Authorization: `Bearer ${token}` }
        });
    }

    async autoComplete({ input }) {
        return await this.rps.post(this.url, {
            query: `
                    {
                        autoComplete(params: {input: "${input}"}){
                        ok
                        error{
                            path
                            message
                        }
                        success{
                            predictions{
                            place_id
                            description
                            id
                            }
                            status
                        }
                        }
                    }
                   `
        });
    }
}

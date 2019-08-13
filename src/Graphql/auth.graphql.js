import axios from "axios";

const rps = axios.create({
    withCredentials: true
});

export class g_Auth {
    constructor(url) {
        this.url = url ? url : process.env.AUTH_MS;
    }

    /**
     * login
     */
    async login({ emailormobile, password }) {
        return await rps.post(this.url, {
            query: `
                    mutation {
                        login(
                        emailormobile: "${emailormobile}"
                        password: "${password}"
                        model: "driver"
                        ) {
                            path
                            message
                            model
                            sessionId
                        }
                    }                  
                    `
        });
    }

    /**
     * me
     */
    async me() {
        return rps.post(this.url, {
            query: `
                    {
                        me {
                        __typename
                        ...on Error {
                            path
                            message
                        }
                        
                        ...on me_data {
                            user {
                                active
                                firstName
                                lastName
                                mobile
                                email
                                avatar
                            }
                            token
                            }
                        }
                    }             
                `
        });
    }

    /**
     * @register
     * @param {*} param0
     * @param {*} model
     */
    async register(
        { email, password, mobile, firstName, lastName },
        model = "driver"
    ) {
        return rps.post(this.url, {
            query: `
                    mutation {
                        register(
                        params: {
                            email: "${email}",
                            password: "${password}",
                            mobile: "${mobile}",
                            firstName: "${firstName}",
                            lastName: "${lastName}",
                        
                        },
                            model: "${model}"
                        ) {
                            path
                            message
                        }
                    }    
                `
        });
    }

    async logout() {
        return rps.post(this.url, {
            query: `
                mutation {
                    logout
                }
            `
        });
    }
}

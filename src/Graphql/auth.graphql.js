import * as rp from "request-promise-native";

export class g_Auth {
    constructor(url) {
        this.url = url ? url : process.env.AUTH_MS;
        this.options = {
            withCredentials: true,
            json: true,
            jar: rp.jar()
        };
    }

    /**
     * login
     */
    async login({ emailormobile, password }) {
        return rp.post(this.url, {
            ...this.options,
            body: {
                query: `
                    mutation {
                        login(
                        emailormobile: ${emailormobile}
                        password: ${password}
                        model: "admin"
                        ) {
                            path
                            message
                        }
                    }                  
                    `
            }
        });
    }

    /**
     * me
     */
    async me() {
        return rp.post(this.url, {
            ...this.options,
            body: {
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
            }
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
        return rp.post(this.url, {
            ...this.options,
            body: {
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
            }
        });
    }
}

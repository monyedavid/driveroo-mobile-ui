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
                                confirmed
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

    async updateProfile({ dob, mothers_maiden_name }) {
        return rps.post(this.url, {
            query: `
            mutation {
                updateProfile(params: {
                  dob: "${dob}",
                  mothers_maiden_name: "James Bond",
                  bvn: "no-bvn-verifaction-method-has-been-added-need-paystack-api-key"
                  primary_location: {
                    address: "157, Ago Palace way okota, lagos",
                    landmark: "CITY HALL, LAST BUSTOP",
                    city: "Lagos",
                    state: "Lagos"
                  },
                  secondary_location: {
                    address: "157, Ago Palace way okota, lagos",
                    landmark: "CITY HALL, LAST BUSTOP",
                    city: "Lagos",
                    state: "Lagos"
                  },
                  tertiary_location: {
                    address: "157, Ago Palace way okota, lagos",
                    landmark: "CITY HALL, LAST BUSTOP",
                    city: "Lagos",
                    state: "Lagos"
                  }
                }) {
                  __typename
                   ...on Error {
                    path
                    message
                  }
                  ...on Driver {
                    active
                    firstName
                    lastName
                    mobile
                    email
                    avatar
                     ...on Driver {
                       dob
                    mothers_maiden_name
                    primary_location {
                      address
                    }
                    secondary_location {
                      address
                    }
                    tertiary_location {
                      address
                    }
                    bvn
                    }
                  }
                }
              }
            `
        });
    }
}

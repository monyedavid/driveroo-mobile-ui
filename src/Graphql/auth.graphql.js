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

    async updateProfile({ dob, mothers_maiden_name , bvn , primary_location , secondary_location , tertiary_location}) {
        return rps.post(this.url, {
            query: `
            mutation {
                updateProfile(params: {
                  dob: "${dob}",
                  mothers_maiden_name: "${mothers_maiden_name}",
                  bvn: "${bvn}"
                  primary_location: {
                    address: "${primary_location.address}",
                    landmark: "${primary_location.landmark}",
                    city: "${primary_location.city}",
                    state: "${primary_location.city}"
                  },
                  secondary_location: {
                    address: "${secondary_location.address}",
                    landmark: "${secondary_location.landmark}",
                    city: "${secondary_location.city}",
                    state: "${secondary_location.state}"
                  },
                  tertiary_location: {
                    address: "${tertiary_location.address}",
                    landmark: "${tertiary_location.landmark}",
                    city: "${tertiary_location.city}",
                    state: "${tertiary_location.state}"
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

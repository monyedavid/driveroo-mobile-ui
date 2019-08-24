import axios from "axios";

const rps = axios.create({
    withCredentials: true
});

export class g_Auth {
    constructor(url) {
        this.url = url;
    }

    /**
     * login
     */
    async login({ emailormobile, password }) {
        console.log({ emailormobile, password });
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
                          incompleteProfile
                          confirmed
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
                                id
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
                          ok
                          error {
                            path
                            message
                          }
                          success {
                            path
                            message
                          }
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

    async updateProfile({
        dob,
        mothers_maiden_name,
        bvn,
        primary_location,
        secondary_location,
        tertiary_location,
        avatarBase64,
        driversLisenceBase64,
        driverLisenceNumber,
        id,
        token,
        avatarExt,
        driversExt
    }) {
        return rps.post(this.url, {
            query: `
            mutation{
              firstUpdate(params: {   
                dob: "${dob}",
                mothers_maiden_name: "${mothers_maiden_name}",
                primary_location: "${primary_location}",
                secondary_location:"${secondary_location}",
                tertiary_location: "${tertiary_location}",
                bank_bvn: "${bvn}",
                avatar: "${avatarBase64}",
                driversLicense: "${driversLisenceBase64}",
                driverLicenseNumber: "${driverLisenceNumber}"
              }, 
                mock: {
                  id: "${id}",
                  token:"${token}",
                  driversExt: "${driversExt}",
                  avatarExt: : "${avatarExt}"
                }
              ) 
              {
                  ok
                  error{
                    path
                    message
                  }
                  
                  success {
                    active
                    confirmed
                    incompleteProfile
                    lastName
                    firstName
                    mobile
                    email
                    avatar
                    dob
                    mothers_maiden_name
                    bvn
                    primary_location
                    secondary_location
                    tertiary_location
                    primary_location_co_ord{
                      Latitude
                      Longitude
                    }
                    secondary_location_co_ord{
                      Latitude
                      Longitude
                    }
                    tertiary_location_co_ord{
                      Latitude
                      Longitude
                    }
                  }
                }
              }
            `
        });
    }

    async previousUser({ email, mobile }) {
        if (mobile)
            return rps.post(this.url, {
                query: `
                  {
                    previousUser(mobile: "${mobile}") {
                      ok
                      gotMail
                      gotMobile
                      user{
                        firstName
                        lastName
                        mobile
                        email
                      }
                      error{
                        path
                        message
                      }
                    }
                  }
                 `
            });

        if (email)
            return rps.post(this.url, {
                query: `
              {
                previousUser(email: "${email}") {
                  ok
                  gotMail
                  gotMobile
                  user{
                    firstName
                    lastName
                    mobile
                    email
                  }
                  error{
                    path
                    message
                  }
                }
              }
             `
            });
    }
}

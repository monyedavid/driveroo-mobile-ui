import gql from "graphql-tag";

const uploadFileMutation = gql`
    mutation(dob: String!,
    mothers_maiden_name: String!,
    primary_location: String!,
    secondary_location: String!,
    tertiary_location: String!,
    bank_bvn: String!,
    avatar: Upload!
    driversLicense: Upload!
    driverLicenseNumber: String!
    ) {
        firstUpdate(
            params: {
                dob: "02-6-1998"
                mothers_maiden_name: "Ibeh"
                primary_location: "150 okota lagos nigeria"
                secondary_location: "150 okota lagos nigeria"
                tertiary_location: "150 okota lagos nigeria"
                bank_bvn: "22246209456"
                avatar: ""
                driversLicense: ""
                driverLicenseNumber: ""
            }
            mock: {
                id: ""
                token: ""
                driversExt: ""
                avatarExt: ""
                andriod: "false"
            }
        )
    }
`;

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
// import { HttpLink } from "apollo-link-http";
import { Platform } from "react-native";

const uri =
    Platform.OS === "ios" ? "http://localuri:4000" : "http://10.0.2.2:4000";

const link = createUploadLink({ uri });

// "://localhost:4000"

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
});

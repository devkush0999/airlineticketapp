import axios from "axios";

export const apiToken = "5zbQe0T6f4oC0OoCRaLodEQCozAV";

export const apiBaseUrl =
  "https://test.api.amadeus.com/v2/shopping/flight-offers";

const clientId = "ZjotUpzjbbA6BruEgtDXIJVhE2HgZ7jG";
const clientSecret = "lx60TeSCYUtdeHqF";
let newApiToken = "";

const getNewAccessToken = async () => {
  try {
    const response = await axios.post(
      `https://test.api.amadeus.com/v1/security/oauth2/token`,
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    newApiToken = response.data.access_token;
    console.log("newApiToken", newApiToken);
  } catch (error) {
    console.error(error);
  }
};
getNewAccessToken();

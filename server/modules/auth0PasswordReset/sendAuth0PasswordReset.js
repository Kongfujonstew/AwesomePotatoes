import axios from "axios";

export default async event => {
  const domain = process.env.AUTH0_DOMAIN;
  const clientId = process.env.AUTH0_CLIENT_ID;
  const endpoint = `https://${domain}/dbconnections/change_password`;

  // Using result causes an unknown failure. The work around to this for now
  // is to just return success as true.
  const result = await axios.post(endpoint, {
    client_id: clientId,
    email: event.data.email,
    connection: "Username-Password-Authentication"
  });

  return { data: { success: true } };
};

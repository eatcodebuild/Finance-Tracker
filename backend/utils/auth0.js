export async function getManagementToken() {
  const response = await fetch(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) throw new Error("Failed to get token");

  const data = await response.json();
  return data.access_token;
}

export async function updateAuth0User(userId, payload, token) {
  const response = await fetch(`https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

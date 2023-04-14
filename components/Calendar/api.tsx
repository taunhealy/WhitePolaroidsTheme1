import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.BASE_URL}/api/google-auth-callback`
);

// You can also set the access token directly if it's available
if (accessToken) {
  oauth2Client.setCredentials({ access_token: accessToken });
}

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

// Retrieving the events for the user's calendar:

const response = await calendar.events.list({
  calendarId: 'primary',
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: 'startTime',
});
const events = response.data.items;

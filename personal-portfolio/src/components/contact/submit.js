const { google } = require('googleapis')

async function appendData(auth, name, email, message) {
  const sheets = google.sheets({ version: 'v4', auth })
  const spreadsheetId = '1Tofmj2Yo9-YSAf9LcxGc65B220YfAKZJ4Ze_3NdhY6k'

  const range = 'Sheet1'
  const valueInputOption = 'USER_ENTERED'
  const resource = {
    values: [[name, email, message]],
  }

  try {
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    })
    console.log('Data appended:', result.data.updates)
  } catch (err) {
    console.error('API error:', err)
  }
}

export default appendData

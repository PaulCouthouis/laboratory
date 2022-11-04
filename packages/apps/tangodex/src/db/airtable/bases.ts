import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
})

const base = Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID)

export const WordCardsBase = base('Word Cards')
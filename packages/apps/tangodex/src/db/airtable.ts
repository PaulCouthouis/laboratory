import Airtable from 'airtable'

export const AirtableBase = () => {
  console.log(
    import.meta.env.VITE_AIRTABLE_API_KEY,
    import.meta.env.VITE_AIRTABLE_BASE_ID
  )

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
  })

  return Airtable.base(import.meta.env.VITE_AIRTABLE_BASE_ID)
}

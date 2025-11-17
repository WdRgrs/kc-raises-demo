import { kcStatus } from "~~/server/services/kcHealth"

// https://nuxt.com/docs/4.x/directory-structure/server

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  const { kcAPIKey } = useRuntimeConfig(event)
  
  try {
    const status = await kcStatus()
    
    return status
  } catch (err) {
    console.error('Error fetching status', err)
    throw createError({ 
      statusCode: 502, 
      statusMessage: 'Error fetching status'
    })
  }
})
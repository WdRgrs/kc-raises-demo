/**
 * KC API (keyed) status check
 * 
 * @returns boolean
 */
export async function kcStatus(): Promise<boolean> {
  const config = useRuntimeConfig()
  const url = config.public.kcApiUrl

  const res = await $fetch<boolean>(`${url}/health`, {
    headers: { 
      Authorization: `Bearer ${config.kcApiKey}`,
    }
  })

  return res  
}
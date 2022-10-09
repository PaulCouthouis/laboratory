import type { APIRoute } from 'astro'
import { supabase } from '../../database/supabase'

export const post: APIRoute = async ({ request }) => {
  const payload = (await request.json()) as {
    email: string
    password: string
  }

  await supabase.auth.signIn(payload)

  const session = supabase.auth.session()

  console.log(session)
  return Response.redirect('/tableau', 200)
}

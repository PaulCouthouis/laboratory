import type { APIRoute } from 'astro'
import { buildDeliveryService } from '../../features/invitation/adapters/nodemailer'
import type { ReplyCard } from '../../features/invitation/domain/values'

export const post: APIRoute = async ({ request }) => {
  const card = (await request.json()) as ReplyCard

  console.log(import.meta.env.SECRET_PASSWORD)

  const options = {
    service: 'gmail',
    auth: {
      user: 'paulcouthouis@gmail.com',
      pass: import.meta.env.SECRET_PASSWORD as string,
    },
    responsible: card.members[0].name,
  }

  const deliveryService = buildDeliveryService(options)

  await deliveryService.deliver(card)

  return new Response(null, {
    status: deliveryService.isSuccess() ? 200 : 300,
  })
}

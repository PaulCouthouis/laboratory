import { createTestAccount } from 'nodemailer'
import { expect, test } from 'vitest'
import { buildDeliveryService } from '../nodemailer'

test('nodemailer integration', async () => {
  const testAccount = await createTestAccount()

  const options = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
    responsible: '',
  }

  const service = buildDeliveryService(options)

  await service.deliver({
    members: [
      {
        diet: 'no pork',
        name: 'Loid Forger',
        status: 'accept',
      },
      {
        name: 'Yor Forger',
        status: 'decline',
      },
      {
        diet: 'children menu',
        name: 'Anya Forger',
        status: 'wait',
      },
    ],
    message: 'Thanks for the invitation ! I am so excited :D',
  })

  expect(service.isSuccess()).toBe(true)
}, 10000)

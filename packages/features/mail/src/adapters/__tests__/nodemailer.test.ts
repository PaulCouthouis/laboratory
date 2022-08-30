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
  }

  const service = buildDeliveryService(options)

  await service.deliver({
    title: 'Test',
    message: 'message',
  })

  expect(service.isSuccess()).toBe(true)
}, 10000)

import type { Metadata } from 'next'
import PassGen from '@/components/pass-gen/PassGen'
import Divider from '@/components/ui/Divider'
import Link from '@/components/ui/InternalLink'
import Paragraph from '@/components/ui/Paragraph'
import Title from '@/components/ui/Title'

export const metadata: Metadata = {
  title: 'Pass-Gen',
  description: 'A simple password generator',
}

export default function PassGenPage() {
  return (
    <>
      <Title>Pass-Gen</Title>

      <Divider />

      <PassGen />

      <Divider />

      <Paragraph>
        Go to the <Link link='/'>home page</Link>.
      </Paragraph>
    </>
  )
}

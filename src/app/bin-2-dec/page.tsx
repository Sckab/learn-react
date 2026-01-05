import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import Link from '@/components/ui/InternalLink'
import Paragraph from '@/components/ui/Paragraph'
import Title from '@/components/ui/Title'
import Bin2Dec from '@/components/bin-2-dec/Bin2Dec'

export const metadata: Metadata = {
  title: 'Bin 2 Dec',
  description: 'A simple binary to decimal converter',
}

export default function PassGenPage() {
  return (
    <>
      <Title>Bin 2 Dec</Title>

      <Divider />

      <Bin2Dec />

      <Divider />

      <Paragraph>
        Go to the <Link link='/'>home page</Link>.
      </Paragraph>
    </>
  )
}

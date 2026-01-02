import type { Metadata } from 'next'
import PassGen from '@/components/pass-gen/PassGen'
import Divider from '@/components/ui/Divider'
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
    </>
  )
}

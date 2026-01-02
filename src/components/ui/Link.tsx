import LinkNext from 'next/link'

export default function Link({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <span className='font-semibold text-powder-blue-300 hover:underline'>
      <LinkNext href={link}>{children}</LinkNext>
    </span>
  )
}

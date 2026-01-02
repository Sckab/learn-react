import Link from 'next/link'

export default function InternalLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <span className='font-semibold text-powder-blue-300 hover:underline'>
      <Link href={link}>{children}</Link>
    </span>
  )
}

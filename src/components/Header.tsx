import Link from '@/components/ui/ExternalLink'

export default function Header({
  title,
}: Readonly<{
  title: string
}>) {
  return (
    <header className='flex justify-center bg-shadow-grey-800 py-3'>
      <div className='mx-3 flex w-full items-center justify-between md:mx-0 md:w-2/3 '>
        <h1 className='text-2xl font-bold text-powder-blue-300 uppercase sm:text-4xl'>
          {title}
        </h1>
        <Link link='https://github.com/Sckab/learn-react'>Github repo</Link>
      </div>
    </header>
  )
}

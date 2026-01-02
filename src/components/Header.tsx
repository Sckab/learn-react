export default function Header({
  title,
}: Readonly<{
  title: string
}>) {
  return (
    <header className='flex justify-center bg-shadow-grey-800 py-3'>
      <div className='mx-3 flex w-full items-center justify-between md:mx-0 md:w-2/3 '>
        <h1 className='text-4xl font-bold text-powder-blue-300 uppercase'>
          {title}
        </h1>
        <a
          href='https://github.com/Sckab/learn-react'
          className='text-xl text-powder-blue-300 hover:underline'
        >
          Github repo
        </a>
      </div>
    </header>
  )
}

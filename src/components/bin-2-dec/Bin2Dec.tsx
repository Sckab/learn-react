'use client'

import { converter } from '@/lib/bin-2-dec/converter'
import { useId, useState } from 'react'
import Divider from '@/components/ui/Divider'

export default function Bin2Dec() {
  const formId = useId()
  const binNumberId = useId()

  const [decNumber, setDecNumber] = useState<string>('')
  const [copyLabel, setCopyLabel] = useState('Copy')

  function handleSubmit(formData: FormData) {
    const binNumber = Number(formData.get('binNumber'))

    const decNumb = converter(binNumber)

    if (decNumber) {
      setDecNumber(decNumb)
    } else {
      setDecNumber('There is no binary number to convert')
    }

    console.group('Bin 2 Dec Converter')
    console.log('Binary Number:  ', binNumber)
    console.log('Decimal Number: ', decNumb)
    console.groupEnd()
  }

  function handleCopy() {
    if (!decNumber) {
      setCopyLabel('There is no decimal number')
      console.log('tried to copy an empty decimal number')
    } else {
      navigator.clipboard.writeText(decNumber)
      setCopyLabel('Copied!')
      console.log('Decimal number copied to the clipboard')
    }
    setTimeout(() => {
      setCopyLabel('Copy')
    }, 1500)
  }

  return (
    <div className='mx-3 flex w-full flex-col items-center gap-3 lg:w-2/3 xl:mx-0 xl:w-1/6'>
      <form
        className='w-full rounded-lg border-2 border-powder-blue-300 bg-shadow-grey-800 p-7'
        id={formId}
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          handleSubmit(formData)
        }}
      >
        <label
          htmlFor={binNumberId}
          className='text-xl text-powder-blue-300'
        >
          Binary Number:
          <br />
        </label>
        <input
          id={binNumberId}
          type='string'
          name='binNumber'
          className='w-full rounded-lg border-2 border-powder-blue-300 p-1 text-pale-sky-50'
        />

        <Divider />

        <input
          type='submit'
          value='Convert'
          className='w-full rounded-md bg-powder-blue-300 font-bold text-shadow-grey-900 hover:cursor-pointer'
        />
      </form>

      <div className='flex w-full flex-col items-center justify-center rounded-lg border-2 bg-shadow-grey-800 p-3 font-bold text-powder-blue-300'>
        <span>Decimal Number:</span>
        <span className='flex h-fit min-h-5 items-center justify-center font-normal break-all text-pale-sky-50'>
          {decNumber}
        </span>

        <div className='h-3'></div>

        <button
          type='button'
          className='w-full rounded-md bg-powder-blue-300 font-bold text-shadow-grey-900 hover:cursor-pointer'
          onClick={handleCopy}
          disabled={!decNumber}
        >
          {copyLabel}
        </button>
      </div>
    </div>
  )
}

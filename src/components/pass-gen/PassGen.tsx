'use client'

import { useId, useState } from 'react'
import Divider from '@/components/ui/Divider'
import { generatePassword, Password } from '@/lib/passwordGenerator'
import Checkbox from './Checkbox'

export default function PassGen() {
  const lengthId = useId()
  const numbersId = useId()
  const upperCaseLettersId = useId()
  const lowerCaseLettersId = useId()
  const specialCharactersId = useId()
  const formId = useId()

  const [password, setPassword] = useState<string | null>(null)
  const [copyLabel, setCopyLabel] = useState('Copy')
  const [outputLabel, setOutputLabel] = useState('')

  function handleSubmit(formData: FormData) {
    const opts: Password = {
      length: Number(formData.get('length')),
      numbers: formData.get('numbers') === 'on',
      upperCaseLetters: formData.get('upperCaseLetters') === 'on',
      lowerCaseLetters: formData.get('lowerCaseLetters') === 'on',
      specialCharacters: formData.get('specialCharacters') === 'on',
    }

    const pwd = generatePassword(opts)

    if (pwd) {
      setPassword(pwd)
      setOutputLabel(pwd)
    } else {
      setPassword(null)
      setOutputLabel('The options are not valid')
    }

    console.group('Password Generation')
    console.group('Password Options')
    console.log('length:             ', opts.length)
    console.log('numbers:            ', opts.numbers)
    console.log('upper case letters: ', opts.upperCaseLetters)
    console.log('lower case letters: ', opts.lowerCaseLetters)
    console.log('special characters: ', opts.specialCharacters)
    console.groupEnd()
    console.log('password:', pwd)
    console.groupEnd()
  }

  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password)
      setCopyLabel('Copied!')
      console.log('password copied to the clipboard')
    } else {
      setCopyLabel('There is no password')
      console.log('tried to copy an empty password')
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
          htmlFor={lengthId}
          className='text-xl text-powder-blue-300'
        >
          Lenght:
          <br />
        </label>
        <input
          id={lengthId}
          type='number'
          name='length'
          min='4'
          max='100'
          defaultValue={20}
          className='w-full rounded-lg border-2 border-powder-blue-300 p-1 text-pale-sky-50'
        />

        <Divider />

        <Checkbox
          id={numbersId}
          label='Numbers'
          name='numbers'
        />

        <Checkbox
          id={upperCaseLettersId}
          label='Upper Case Letters'
          name='upperCaseLetters'
        />

        <Checkbox
          id={lowerCaseLettersId}
          label='Lower Case Letters'
          name='lowerCaseLetters'
        />

        <Checkbox
          id={specialCharactersId}
          label='Special Characters'
          name='specialCharacters'
        />

        <Divider />

        <input
          type='submit'
          value='Generate Password'
          className='w-full rounded-md bg-powder-blue-300 font-bold text-shadow-grey-900 hover:cursor-pointer'
        />
      </form>

      <div className='flex w-full flex-col items-center justify-center rounded-lg border-2 bg-shadow-grey-800 p-3 font-bold text-powder-blue-300'>
        <span>Password:</span>
        <span className='flex h-fit min-h-5 items-center justify-center font-normal break-all text-pale-sky-50'>
          {outputLabel}
        </span>

        <div className='h-3'></div>

        <button
          type='button'
          className='w-full rounded-md bg-powder-blue-300 font-bold text-shadow-grey-900 hover:cursor-pointer'
          onClick={handleCopy}
          disabled={!password}
        >
          {copyLabel}
        </button>
      </div>
    </div>
  )
}

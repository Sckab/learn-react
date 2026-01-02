export interface Password {
  length: number
  numbers: boolean
  upperCaseLetters: boolean
  lowerCaseLetters: boolean
  specialCharacters: boolean
}

export function generatePassword(passwordOpts: Password): string {
  let password: string = ''
  let chars: string = ''

  const numbers: string = '0123456789'
  const upperCaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters: string = 'abcdefghijklmnopqrstuvwxyz'
  const specialCharacters: string = '()[]{}|!£$%&/=@#§*,.-_;:'

  const isPasswordValid = (): boolean =>
    passwordOpts.length > 0
    && (passwordOpts.numbers
      || passwordOpts.lowerCaseLetters
      || passwordOpts.upperCaseLetters
      || passwordOpts.specialCharacters)

  if (isPasswordValid()) {
    if (passwordOpts.lowerCaseLetters) {
      chars += lowerCaseLetters
    }

    if (passwordOpts.upperCaseLetters) {
      chars += upperCaseLetters
    }

    if (passwordOpts.specialCharacters) {
      chars += specialCharacters
    }

    if (passwordOpts.numbers) {
      chars += numbers
    }

    for (let i = 0; i < passwordOpts.length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  } else {
    password = ''
  }

  return password
}

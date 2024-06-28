interface charSymbolProps {
    upperCase: boolean,
    lowerCase: boolean,
    number: boolean,
    specialCharacter: boolean,
}

interface iProps {
    length: number
    charSymbol: charSymbolProps
}

const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = '0123456789'
const specialCharacterSet = "!@#$%^&*()-_=+|[]{};:/?."



const getRandomData = (dataSet: string) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

export function RandomPasswordGenerator({ length, charSymbol }: iProps) {

    let password = "";

    if (charSymbol?.upperCase) {
        password += getRandomData(upperCaseSet)
    }

    if (charSymbol?.lowerCase) {
        password += getRandomData(lowerCaseSet)
    }

    if (charSymbol?.number) {
        password += getRandomData(numberSet)
    }

    if (charSymbol?.specialCharacter) {
        password += getRandomData(specialCharacterSet)
    }

    if (password.length < length) {
        return 20 * length
    }

}

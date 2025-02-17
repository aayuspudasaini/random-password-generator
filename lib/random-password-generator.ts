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
const specialCharacterSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"



const getRandomData = (dataSet: string) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

export function RandomPasswordGenerator({ length, charSymbol }: iProps) {

    let password = "";

    let charSet = ""

    if (charSymbol?.upperCase) {
        charSet += upperCaseSet
    }

    if (charSymbol?.lowerCase) {
        charSet += lowerCaseSet
    }

    if (charSymbol?.number) {
        charSet += numberSet
    }

    if (charSymbol?.specialCharacter) {
        charSet += specialCharacterSet
    }

    for (let i = 1; i <= length; i++) {
        password += getRandomData(charSet)
    }

    return password

}

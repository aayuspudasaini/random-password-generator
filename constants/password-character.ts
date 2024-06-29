interface iProps {
    title: 'upperCase' | 'lowerCase' | 'number' | 'specialCharacter';
    symbol: string
}


export const PasswordCharacter: iProps[] = [
    {
        title: "upperCase",
        symbol: "ABC"
    },
    {
        title: "lowerCase",
        symbol: "abc"
    }, {
        title: "number",
        symbol: "123"
    }, {
        title: "specialCharacter",
        symbol: "#$&"
    }
]
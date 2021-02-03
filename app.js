const binaryToIp = (binary) => {

    let checkBinary = binary.find(num > 1 || num < 0);

    if (binary.length === 32 && checkBinary === undefined) {
        for (let i = 0; i < binary.length; i++) {
            if (i < 7) {

            }
            if (i >= 7 && i < 15) {
                
            }
            if (i >= 15 && i < 23) {
                
            }
            if (i >= 23) {
                
            }
        }
    }
}

const ipToBinary = () => {

}
const getExtensionFFile = (filename) => {
    const arrString = filename.split(".")
    return arrString[arrString.length - 1]
}






module.exports = {
    getExtensionFFile,

}

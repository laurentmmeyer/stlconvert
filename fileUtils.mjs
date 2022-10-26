/**
 * Gets the file (not including ".") from the path
 * @param {*} filePath
 */
const getFileExtension = path => {
  if (!path || typeof 'path' != 'string') {
    return ''
  }
  const extension = path.slice(path.lastIndexOf('.') + 1)
  return extension.toLocaleLowerCase()
}

/**
 * Gets the extension (not including the '.') from the path
 * @param {*} filePath
 */
const getFileNameFromPath = path => {
  if (!path || typeof 'path' != 'string') {
    return ''
  }
  if (path.endsWith('/')) {
    path = path.substr(0, path.length - 1)
  }
  const extension = getFileExtension(path)
  const fileName = path.slice(
    path.lastIndexOf('/') + 1,
    path.lastIndexOf(extension)
  )
  return fileName
}


export {getFileNameFromPath, getFileExtension}

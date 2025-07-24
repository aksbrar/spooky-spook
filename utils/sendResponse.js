// function to send response
export const sendRes = (res, statusCode, conentType, content) => {
  res.statusCode = statusCode
  res.setHeader('Content-Type', conentType)
  res.end(content)
}
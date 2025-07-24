// function to send response
export const sendRes = (res, statusCode, header, content) => {
  res.statusCode = statusCode
  res.setHeader(header)
  res.end(content)
}
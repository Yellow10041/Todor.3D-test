export const getContentType = () => ({
  "Content-Type": `application/json`,
})

export const errorCatchMassage = (error: any): string => {
  const massage = error?.response?.data?.message

  return massage
    ? typeof error.response.data.message === "object"
      ? massage[0]
      : massage
    : error.massage
}

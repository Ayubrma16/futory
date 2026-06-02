export function toPersianNumber(
  value: number | string
) {
  return value.toString().replace(
    /\d/g,
    (digit) =>
      '۰۱۲۳۴۵۶۷۸۹'[parseInt(digit)]
  )
}

export function toPersianDate(
  date: string
) {
  return new Date(date).toLocaleDateString(
    'fa-IR',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  )
}

export function readingTime(
  text: string
) {
  const words = text.trim().split(/\s+/).length

  return Math.max(
    1,
    Math.ceil(words / 200)
  )
}
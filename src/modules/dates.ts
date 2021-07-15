const addZeroToDate = (d: number): string | number =>
  d.toString().length === 1 ? `0${d.toString()}` : d

const getFullDateStringFromISO = (iso: string): string => {
  const d = new Date(iso)
  return `${addZeroToDate(d.getDate())}.${addZeroToDate(
    d.getMonth()
  )}.${d.getFullYear()}`
}

const getFullTimeStringFromISO = (iso: string): string => {
  const d = new Date(iso)
  return `${addZeroToDate(d.getHours())}:${addZeroToDate(
    d.getMinutes()
  )}:${addZeroToDate(d.getSeconds())}`
}

const getFullDateString = (iso: string): string => {
  return `${getFullDateStringFromISO(iso)} ${getFullTimeStringFromISO(iso)}`
}

export { getFullDateStringFromISO, getFullTimeStringFromISO, getFullDateString }

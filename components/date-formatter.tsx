import { parseISO, format } from "date-fns"
import { es } from "date-fns/locale"

export default function DateFormatter({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: es })}
    </time>
  )
}

export default function Button({ text, color, textColor }) {
  return (
    <button type="button" className={`rounded-3xl px-5 py-1.5 ${color} font-semibold ${textColor}`}>{text}</button>
  )
}
import Wrapper from '@/components/wrapper/Wrapper'
import './globals.css'

export const metadata = {
  title: 'Internshala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body ><Wrapper>
        { children}</Wrapper></body>
    </html>
  )
}
  
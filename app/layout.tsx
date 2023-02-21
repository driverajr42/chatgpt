import '@/styles/globals.css'
import '@/components/Sidebar'
import { Sidebar } from '@/components/Sidebar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Client Provider - Notification */}

       <div className='bg-[#343541] flex-1'>
       {children}
       </div>
        </div>
        </body>
    </html>
  )
}

"use client"

import About from '@/app/components/About';
import Predict from '@/app/components/Predict';


export default function Page() {
  return (
    <main className="w-screen">
    
    {/* Landing page  */}
    <div className="flex items-center ">
      <About />
    </div>
    {/* Predict page */}
    <Predict />

  </main>
)}

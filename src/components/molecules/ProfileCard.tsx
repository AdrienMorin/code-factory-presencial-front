import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

export default function ProfileCard() {
  return (
      <div className="flex justify-center items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="flex flex-col">Argenis Medina Morales <span className="text-orange-400 -mt-1">administrador</span></p>
        
      </div>
  )
}

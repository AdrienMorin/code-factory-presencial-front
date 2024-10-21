import React from 'react'
import MainText from '@/components/atoms/MainText/index'
import { MainTitle } from '@/components/atoms/Title/index'

type AlertMessageProps = {
  title: string
  text: string
}

const Index = ({
  title,
  text,
}: AlertMessageProps) => {
  return (
    <div className="mb-3">
      <div className="m-1">
        <MainTitle text={title} />
      </div>
      <div className="m-1">
        <MainText text={text} />
      </div>
    </div>
  )
}

export default Index
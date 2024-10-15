import MainButton from "@/components/atoms/MainButton/index"
import { MainTitle } from "@/components/atoms/Title/index"

const index = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
      <MainTitle text='Detalles de tu vuelo' />
      <MainButton 
        text='Ver mas'
        handleClick={() => console.log('Button clicked')} 
      />
    </div>
  )
}

export default index
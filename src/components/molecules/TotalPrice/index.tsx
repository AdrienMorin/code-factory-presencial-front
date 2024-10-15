import MainText from '@/components/atoms/MainText/index';

type TotalPriceProps = {
  total: number;
}

const index = ({ total }: TotalPriceProps) => {
  return (
    <div className='flex justify-between bg-primary rounded-b-[6px] w-full h-16 p-5'>
      <MainText text='Total' color='text-white'/>
      <MainText text={`$${total}COP`} color='text-white'/>
    </div>
  )
}

export default index
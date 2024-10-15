import MainText from '../../atoms/MainText/index'

type FloatBadgeProps = {
  text: string;
}

const index = ({ text }: FloatBadgeProps) => {
  return (
    <div className='inline-block px-3 py-1 rounded-e-[6px] rounded-bl-[6px] border-2 border-primary'>
      <MainText text={`${text}`} />
    </div>
  )
}

export default index

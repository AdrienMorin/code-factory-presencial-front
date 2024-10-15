import MainText from '../../atoms/MainText/index'

type FloatBadgeProps = {
  text: string;
}

const index = ({ text }: FloatBadgeProps) => {
  return (
    <div className='inline-block px-3 py-1 rounded-e-sm rounded-bl-sm shadow-proportional'>
      <MainText text={`${text}`} />
    </div>
  )
}

export default index

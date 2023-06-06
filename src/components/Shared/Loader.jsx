import { BeatLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[60vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <BeatLoader size={100} color='red' />
    </div>
  )
}

export default Loader
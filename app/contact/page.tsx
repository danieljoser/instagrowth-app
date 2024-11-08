import Form from '@/components/Form'
import Image from 'next/image'


const Contact = () => {
  return (
    <div className="py-32 px-32 bg-[url('assets/images/background-1.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center h-full gap-8">
         <Image 
              src="assets/images/logo.png"
              width={400}
              height={300}
              alt="logo"
        />
        <Form />
    </div>
  )
}

export default Contact
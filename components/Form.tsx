'use client'

import { TextInput } from "@mantine/core"
import { useField, isEmail } from "@mantine/form"
import { Button } from "@mantine/core"

const Form = () => {

  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold font-alexandria text-white mx-40 text-center">Llena este formulario, y nos pondremos en contacto contigo a través de tu correo electrónico</h2>
      <form className="py-8 px-8 flex flex-col gap-4 justify-centeritems-center bg-white w-1/2 rounded-md">
        <TextInput  label="Nombre" placeholder="Ej. María"/>
        <TextInput  label="Apellido" placeholder="Ej. Perez"/>
        <TextInput  {...field.getInputProps()} label="Email" placeholder="Enter your email"/>
        <Button type="submit" fz={16} color="violet" className="mt-4">Forma parte de Instagrowth</Button>
      </form>
    </div>
  )
}

export default Form
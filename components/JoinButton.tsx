import { Button } from "@mantine/core"
import { CircleCheckBig } from "lucide-react"
import { useRouter } from "next/navigation"


const JoinButton = ({width, fontSize, variant, color, size, radius, checkSize, checkStroke}: any) => {

  const check = <CircleCheckBig size={checkSize} strokeWidth={checkStroke} />
  const router = useRouter();

  const handleJoin = () => {
    router.push("/contact")
  }
  
  return (

    
    <div className="flex justify-center align-middle">
        <Button w={width} fz={fontSize} variant={variant} color={color} size={size} radius={radius} rightSection={check} onClick={handleJoin}>¡Quiero apuntarme!</Button>
    </div>
  )
}

export default JoinButton
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"


const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-[60px] p-8 border-b-2'>
        <div className='flex items-center space-x-6'>
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>Fr</AvatarFallback>
            </Avatar>
            <h2 className="text-[1.3rem]">Welcome back Dr. Frogge</h2>
        </div>
        <Button>Logout</Button>
    </div>
  )
}

export default Header
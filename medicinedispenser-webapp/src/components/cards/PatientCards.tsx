import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

interface patientCardProps{
    name: string;
    email: string;
    id: string;
}

const PatientCards = ({name, email, id} : patientCardProps) => {
  return (
    <Card className='w-[32%] transition-all duration-300 hover:-translate-y-0.5- hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]'>
        <CardHeader>
            <CardTitle className='flex items-center space-x-4'>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='text-lg'>{name}</h1>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <span><h1 className='font-semibold'>Email:</h1> {email}</span>
            <h1 className='font-semibold'>Note:</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id odio nostrum vitae commodi illum aliquam tempore, error blanditiis cumque, laboriosam adipisci porro debitis iste assumenda labore saepe quia. Ab, provident.</p>
        </CardContent>
        <CardFooter>
            <Button asChild><Link href={`/${id}`}>View</Link></Button>
        </CardFooter>
    </Card>
  )
}

export default PatientCards
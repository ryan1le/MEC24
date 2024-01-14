'use client'
import * as React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input";
import { FaCalendarPlus } from "react-icons/fa6";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";
  

interface patientEvent {
    pillID: string;
    time: string;
    amount: string; 
}

interface patientSettingForm  {
    event: patientEvent[];
  }

const Event = ({pillID, time, amount} : patientEvent) => {
    return (
    <Card className="pt-5 w-[55%]">
        <CardContent className="flex items-center space-x-4">
            <div className="flex flex-col space-y-2">
                <h2>Container</h2>
                <Input type="number" placeholder="Enter Dispense Amount" defaultValue={pillID} disabled/>
            </div>
            <div className="flex flex-col space-y-2">
                <h2>Dispense Amount</h2>
                <Input type="number" placeholder="Enter Dispense Amount" defaultValue={amount} disabled/>
            </div>
            <div className="flex flex-col space-y-2">
                <h2>Time</h2>
                <Input type="time" step="1" placeholder="Enter Start Time" defaultValue={time} disabled/>
            </div>
        </CardContent>
    </Card>
    )
}

const PatientSettings = () => {
    const[container, setContainer] = useState("");
    const[dispenseAmount, setDispenseAmount] = useState("");
    const[time, setTime] = useState("");

    const form = useForm<patientSettingForm>({defaultValues: { event: [] }});

    const onSubmit: SubmitHandler<patientSettingForm> = (data) => {
        
    }

    const add = () => {
        const temp = form.watch("event");
        console.log(temp)
        temp.push({pillID: container, time: time, amount: dispenseAmount})
        form.setValue("event", [...temp])

        setContainer("")
        setDispenseAmount("")
        setTime("")
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col items-center space-y-5'>
                <Card className="w-[55%]">
                    <CardHeader>
                        <CardTitle className="text-[1.5em]">
                            Patient Event Interval
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div className="flex flex-col space-y-2">
                            <h2>Container</h2>
                            <Select value={container} onValueChange={(e) => setContainer(e)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Container" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Container 1</SelectItem>
                                    <SelectItem value="2">Container 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2>Dispense Amount</h2>
                            <Input type="number" placeholder="Enter Dispense Amount" value={dispenseAmount} onChange={(e) => setDispenseAmount(e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2>Time</h2>
                            <Input type="time" step="1" placeholder="Enter Start Time" value={time} onChange={(e) => setTime(e.target.value)}/>
                        </div>
                        <div className="pt-6">
                            <FaCalendarPlus size={40} className="cursor-pointer" onClick={() => add()}/>
                        </div>
                    </CardContent>
                </Card>
                {form.watch("event")?.map((item, index) => (
                    <Event key={index} pillID={item.pillID} amount={item.amount} time={item.time}/>
                ))}
                <Button className="w-[55%] text-[1.2rem]" type="submit">Submit</Button>
            </div>
        </form>
  )
}

export default PatientSettings
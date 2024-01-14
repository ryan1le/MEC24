import { columns } from "@/components/dataTable/columns";
import { DataTable } from "@/components/dataTable/data-table";
import PatientSettings from "@/components/patientSettings/PatientSettings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import { FaPills } from "react-icons/fa6";

import { pb } from "@/lib/pocketBase"


export default async function PatientDashboard({ params }: { params: { patient: string } }) {
    const records = await pb.collection('container').getFullList({
        filter: `patient = "${params.patient}"`,
    });

    const logData = await pb.collection('logData').getFullList({
        filter: `patient = "${params.patient}"`,
    });
    console.log(logData)
    console.log(records)

    const data = [{
        id: "a12sa",
        date: new Date().toLocaleDateString(),
        timeSent: new Date().toLocaleTimeString(),
        timeTaken: new Date().toLocaleTimeString(),
        pillAmmount: 2
    },
    {
        id: "a12sa",
        date: new Date().toLocaleDateString(),
        timeSent: new Date().toLocaleTimeString(),
        timeTaken: new Date().toLocaleTimeString(),
        pillAmmount: 2
    },
    {
        id: "a12sa",
        date: new Date().toLocaleDateString(),
        timeSent: new Date().toLocaleTimeString(),
        timeTaken: new Date().toLocaleTimeString(),
        pillAmmount: 2
    },
    {
        id: "a12sa",
        date: new Date().toLocaleDateString(),
        timeSent: new Date().toLocaleTimeString(),
        timeTaken: new Date().toLocaleTimeString(),
        pillAmmount: 2
    }]

  return (
    <main className="p-8 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-[2rem]">Patient's Dashboard</h1>
        <Tabs defaultValue="table">
            <TabsList className="mb-4">
                <TabsTrigger className='text-[0.9rem]' value="table">Data Table</TabsTrigger>
                <TabsTrigger className='text-[0.9rem]' value="setting">Dispenser Setting</TabsTrigger>
            </TabsList>
            <Button className="ml-5" asChild><Link href="/">Go back</Link></Button>
            <TabsContent value="table">
                <Card className="w-[25%]">
                    <CardHeader>
                        <CardTitle className="text-[1.3em]">
                            Total Pills 
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        {records?.map((item, index) => (
                            <div key={index} className="flex items-center space-x-7">
                                <div className="flex flex-col items-center">
                                    <FaPills size={50}/>
                                    <h2>Container {item.containerNumber}</h2>
                                </div>
                                <p className="text-[1.8rem]">{item.amount}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <div className="py-5">
                    <DataTable columns={columns} data={data} />
                </div>
            </TabsContent>
            <TabsContent value="setting">
                <PatientSettings/>
            </TabsContent>
        </Tabs>
      </div>
    </main> 
  )
}

import PatientCards from "@/components/cards/PatientCards";
import { Input } from "@/components/ui/input";

async function getPatients() {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/patient/records?cargiver=qolnf6b73kijrd1`,
  { cache: 'no-store'})
  const data = await res.json()
  return data?.items as any[]
}

export default async function Home() {
  const patient = await getPatients()
  return (
    <main className="p-8 space-y-8">
      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold text-[2rem]">Patient List</h1>
        <Input className="w-[30%] h-10" type="text" placeholder="Search"/>
      </div>
      <div className="flex flex-wrap gap-4 pt-0 justify-between">
        {patient.map((item, index) => (
          <PatientCards key={index} name={item.name} email={item.email} id={item.id}/>
        ))}
      </div>
    </main>
  )
}

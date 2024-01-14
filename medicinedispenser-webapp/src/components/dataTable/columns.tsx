"use client"

import { ColumnDef } from "@tanstack/react-table"

export interface column {
    id: string;
    date: String;
    timeSent: String;
    timeTaken: String;
    pillAmmount: Number;
}

export const columns: ColumnDef<column>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "timeSent",
    header: "Dispense Time",
  },
  {
    accessorKey: "timeTaken",
    header: "Time Taken",
  },
  {
    accessorKey: "pillAmmount",
    header: "Pill Ammount"
  }
]

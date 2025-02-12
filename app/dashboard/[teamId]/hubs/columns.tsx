"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export type Hub = {
  id: string;
  name: string;
  location: string;
  status: "online" | "offline" | "maintenance";
  connectedDevices: number;
  lastUpdated: string;
};

export const columns: ColumnDef<Hub>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: "Hub Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("location")}</div>
    )
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const color =
        status === "online"
          ? "text-green-500"
          : status === "offline"
          ? "text-red-500"
          : "text-yellow-500";
      return (
        <div className={`capitalize font-semibold ${color}`}>{status}</div>
      );
    }
  },
  {
    accessorKey: "connectedDevices",
    header: "Devices",
    cell: ({ row }) => <div>{row.getValue("connectedDevices")}</div>
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => (
      <div className="text-gray-500 text-sm">{row.getValue("lastUpdated")}</div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const hub = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(hub.id)}>
              Copy Hub ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Hub Details</DropdownMenuItem>
            <DropdownMenuItem>Manage Hub</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

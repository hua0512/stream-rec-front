"use client"

import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu"
import {MixerHorizontalIcon} from "@radix-ui/react-icons"
import {Table} from "@tanstack/react-table"

import {Button} from "@/components/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/new-york/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>,
  idFn?: (id: string) => string,
}

export function DataTableViewOptions<TData>({
                                              table,
                                              idFn
                                            }: DataTableViewOptionsProps<TData>) {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 lg:flex"
          >
            <MixerHorizontalIcon className="mr-2 h-4 w-4"/>
            View
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[150px]">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          {table
              .getAllColumns()
              .filter(
                  (column) =>
                      typeof column.accessorFn !== "undefined" && column.getCanHide()
              )
              .map((column) => {
                return (
                    <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {idFn ? idFn(column.id) : column.id}
                    </DropdownMenuCheckboxItem>
                )
              })}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
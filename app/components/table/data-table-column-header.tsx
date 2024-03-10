import {ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon,} from "@radix-ui/react-icons"
import {Column} from "@tanstack/react-table"

import {cn} from "@/lib/utils"
import {Button} from "@/components/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/new-york/ui/dropdown-menu"
import {useTranslations} from "next-intl";

interface DataTableColumnHeaderProps<TData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
                                                       column,
                                                       title,
                                                       className,
                                                     }: DataTableColumnHeaderProps<TData, TValue>) {

  const t = useTranslations("TableToolbar")

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  /// Sort the column in the specified direction.
  const sort = (asc: boolean) => {
    // If the column is not sorted, sort it in the specified direction.
    if (!column.getIsSorted())
      column.toggleSorting(asc)
    else
      column.clearSorting() // clear sorting
  };

  return (
      <div className={cn("flex items-center space-x-2", className)}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                size="sm"
                className="-ml-3 h-8 data-[state=open]:bg-accent"
            >
              <span>{title}</span>
              {column.getIsSorted() === "desc" ? (
                  <ArrowDownIcon className="ml-2 h-4 w-4"/>
              ) : column.getIsSorted() === "asc" ? (
                  <ArrowUpIcon className="ml-2 h-4 w-4"/>
              ) : (
                  <CaretSortIcon className="ml-2 h-4 w-4"/>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => sort(false)}>
              <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
              {t("asc")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => sort(true)}>
              <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
              {t("desc")}
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70"/>
              {t("hide")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
  )
}
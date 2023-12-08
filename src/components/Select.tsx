'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/utils/cn'
import { compareStrings } from '@/utils/compareStrings'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { ScrollArea } from './ui/scroll-area'

export interface SelectProps {
  ports: string[]
  onSelect: (port?: string) => void
}

export function Select ({ ports, onSelect }: SelectProps): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value !== ''
            ? ports.find((port) => {
                debugger
                return compareStrings(port, value) === 0
              })
            : 'Select a port...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search port...' />
          <ScrollArea className='h-96'>
            <CommandEmpty>No port found.</CommandEmpty>
            <CommandGroup>
              {ports.map((port) => (
                <CommandItem
                  key={port}
                  value={port}
                  onSelect={(currentValue) => {
                    const port = ports?.find(port => compareStrings(port, currentValue) === 0)

                    onSelect(port)

                    setValue(
                      compareStrings(currentValue, value) === 0
                        ? ''
                        : currentValue
                    )
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === port ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {port}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

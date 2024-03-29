import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

// import { OrderDetails } from './customer-details'
export interface CustomerTableRowProps {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

export function CustomerTableRow({
  id,
  name,
  email,
  phone,
  address,
}: CustomerTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">{id}</TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell className="font-medium">{address}</TableCell>
      <TableCell className="font-medium">{email}</TableCell>
      <TableCell className="font-medium">{phone}</TableCell>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="xs"
              onClick={() => {
                toast.info('🏗 Funcionalidade em construção...')
              }}
            >
              <Pencil className="h-3 w-3" />
              <span className="sr-only">Detalhes do produto</span>
            </Button>
          </DialogTrigger>
          {/* <OrderDetails orderId={customerId} open={isDetailsOpen} /> */}
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

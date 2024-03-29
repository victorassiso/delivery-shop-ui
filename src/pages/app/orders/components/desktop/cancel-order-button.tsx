import { useMutation } from '@tanstack/react-query'
import { X } from 'lucide-react'
import { toast } from 'sonner'

import { OrderStatus } from '@/@types/bd-entities'
import { cancelOrder } from '@/api/orders/cancel-order'
import { Button } from '@/components/ui/button'
import { useOrders } from '@/hooks/use-orders'

interface CancelOrderButtonProps {
  id: string
  status: OrderStatus
}

export function CancelOrderButton({ id, status }: CancelOrderButtonProps) {
  const { updateOrderStatusOnCache } = useOrders()

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { id }) {
        updateOrderStatusOnCache(id, 'canceled')
        toast.success('Pedido cancelado com sucesso!', {
          closeButton: true,
        })
      },
      retry: 3,
    })

  return (
    <div>
      <Button
        disabled={
          !['pending', 'processing', 'delivering'].includes(status) ||
          isCancelingOrder
        }
        variant="ghost"
        size="xs"
        type="button"
        onClick={() => cancelOrderFn({ id })}
      >
        <X className="mr-2 h-3 w-3" />
        Cancelar
      </Button>
    </div>
  )
}

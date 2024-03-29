import { GetProductsResponse } from '@/api/products/get-products'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ProductsTableRow } from './products-table-row'
import { ProductsTableSkeleton } from './products-table-skeleton'

interface ProductTableProps {
  response?: GetProductsResponse
  isLoadingProducts: boolean
}

export function ProductsTable({
  isLoadingProducts,
  response,
}: ProductTableProps) {
  return (
    <div className="rounded-md border ">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/14 rounded-tl-md">
              Identificador
            </TableHead>
            <TableHead className="w-2/14">Nome</TableHead>
            <TableHead className="w-4/14">Descrição</TableHead>
            <TableHead className="w-2/14">Categoria</TableHead>
            <TableHead className="w-2/14">Preço</TableHead>
            <TableHead className="w-1/14 rounded-tr-md"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoadingProducts && <ProductsTableSkeleton />}
          {response &&
            response.products.map((product) => {
              return (
                <ProductsTableRow
                  key={product.id}
                  productId={product.id}
                  category={product.category}
                  description={product.description}
                  productName={product.name}
                  price={product.price}
                />
              )
            })}
        </TableBody>
      </Table>
    </div>
  )
}

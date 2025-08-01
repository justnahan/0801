export interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

export interface ProductCardProps {
  product: Product
  delay?: number
}

export interface ProductGridState {
  products: Product[]
  loading: boolean
  error: string | null
}
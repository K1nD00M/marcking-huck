export interface Product {
   id: string
   name: string
   description: string
   img: string
   features: object
   expirationDate: string
}

export interface ProductSchema {
   data?: Product
   isError: boolean
   isLoading: boolean
}
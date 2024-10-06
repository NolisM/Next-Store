import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify"



interface categoryProps {
    params: {
        categories: string[]
    }
}

export default async function Categories(props: categoryProps) {
    const products = await getProducts()

    const { categories } = props.params
    return (
        <ProductsWrapper products={products} />
    )
}
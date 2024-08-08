interface categoryProps{
    params:{
        categories:string[]
    }
}

export default function Categories(props : categoryProps){

    const {categories}=props.params
    return(
        <h1>Categoria dinamica : {categories}</h1>
    )
}
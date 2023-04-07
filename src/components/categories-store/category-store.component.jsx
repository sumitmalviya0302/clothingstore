import CategoryItem from "../category-item/category-item.component";
import './category-store.styles.scss'


const CategoryStore = ( {categories}) =>{
    return(
        <div className="categories-container">
      {categories.map(( category ) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
    )
}

export default CategoryStore
import { Link } from "react-router-dom";

const TopBar = () => {
return(
<>

<nav>
<Link to="/">home</Link>
<Link to="/category">Category</Link>
<Link to="/subcategory">SubCategory</Link>
<Link to="/product">Product</Link>
<Link to="/display">Display</Link>
</nav>
</>
)
}

export default TopBar
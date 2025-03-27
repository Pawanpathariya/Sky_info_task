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
<Link to="/delsub">Delete SubCategory</Link>
<Link to="/delcat">Delete Category</Link>
</nav>
</>
)
}

export default TopBar
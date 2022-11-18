import { ProductLayout } from "../../components/layouts";

export default function Product({
  id,
  brand,
  model,
  sizes,
  image,
  price,
  onEdit,
  onDelete,
}) {
  //const { id } = useParams();
  //!get image!

  return (
    <ProductLayout imageUrl={image}>
      <p className="brand">{brand.slice(0, 15)}</p>
      <p className="model">{model}</p>
      <div className="image"/>
      <div>
        Price:&nbsp;
        <span className="price">
          &#8362;
          {price}
        </span>
      </div>
      <div>
        Choose size:&nbsp;
        <select name="sizes" id="sizes">
          {sizes.map((sizeObj) => (
            <option
              key={`sz-${sizeObj.size}`}
              value={sizeObj.size}
              disabled={sizeObj.quantity === 0}
            >
              {sizeObj.size}
            </option>
          ))}
        </select>
      </div>
      <div className="buttons">
        <button type="button" className="edit" onClick={onEdit.bind(null, id)}>
          Edit
        </button>
        <button
          type="button"
          className="delete"
          onClick={onDelete.bind(null, id)}
        >
          Delete
        </button>
      </div>
    </ProductLayout>
  );
}

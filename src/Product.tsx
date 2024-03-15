import { IProduct } from "./types";

interface IProductProps {
  data: IProduct;
  incrementPrice?: () => void;
}

function Product(props: IProductProps) {
  const handleClick = () => alert("Click!");

  const renderedImages = props.data.images.map((image) => (
    <img key={image.url} src={image.url} alt={image.title} />
  ));

  return (
    <div>
      <ul>
        <li>{props.data.title}</li>
        <li>{props.data.description}</li>
        <li>{props.data.price}</li>
        <li>
          <ul>
            <h4>Images</h4>
            {renderedImages}
          </ul>
        </li>
        <button onClick={props.incrementPrice}>increment price by 10</button>
      </ul>
      <ProductAddress
        address={props.data.warehouse.address}
        onClick={handleClick}
      />
    </div>
  );
}

interface IProductAddressProps {
  address: IProduct["warehouse"]["address"];
  onClick?: () => void;
}

function ProductAddress(props: IProductAddressProps) {
  return (
    <div>
      <ul onClick={props.onClick}>
        <li>{props.address.address}</li>
        <li>{props.address.city}</li>
        <li>{props.address.postalCode}</li>
        <li>{props.address.state}</li>
        <li>{props.address.coordinates.lat}</li>
        <li>{props.address.coordinates.lng}</li>
      </ul>
    </div>
  );
}

export default Product;

import { useTranslation } from 'next-i18next';

type Props = {
  product: any;
};
const Product = ({ product }: Props) => {
  const { i18n } = useTranslation();

  return (
    <li key={product._id}>
      <div>
        <h3>{product.title[i18n.resolvedLanguage]}</h3>
        {product.description && <p>{product.description[i18n.resolvedLanguage]}</p>}
        {product.allergens && <p className='small-font'>{product.allergens[i18n.resolvedLanguage]}</p>}
      </div>
      <p>{product.price}</p>
    </li>
  );
};

export default Product;

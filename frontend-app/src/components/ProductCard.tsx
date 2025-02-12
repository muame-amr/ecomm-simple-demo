import { useState } from "react";
import Product from "../interfaces/IProduct";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Rating,
} from "@mui/material";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const [product] = useState<Product>(props.product);

  return (
    <>
      <Card
        sx={{
          width: 345,
          height: 550,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <CardHeader title={product.title} />
        <CardMedia
          component="img"
          height="194"
          image={product.images}
          alt="Product image"
        />
        <CardContent>
          <Stack direction="column" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
              <Typography variant="body1" color="text.primary">
                {product.rating}
              </Typography>
            </Stack>
            <Stack direction="column">
              <Typography variant="body1" color="text.primary">
                {product.price} $
              </Typography>
              <Typography variant="body1" color="text.primary">
                Price discount: {product.discountPercentage}%
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

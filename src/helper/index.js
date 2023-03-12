import _ from "lodash";

export const handleTotalPrice = (productList, key) => {
  return _.reduce(
    productList,
    (total, product) => {
      return total + product[key];
    },
    0
  );
};

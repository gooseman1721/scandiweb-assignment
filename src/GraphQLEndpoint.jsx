import { client, Query, Field } from "@tilework/opus";

client.setEndpoint("http://localhost:4000/");

async function get_category_names() {
  try {
    const query = new Query("categories", true).addField(
      new Field("name", false)
    );

    const queryResult = await client.post(query);

    return queryResult.categories.map((element) => element.name);
  } catch (err) {
    console.log(err);
  }
}

async function get_category_items(category) {
  try {
    const fields = ["id", "name", "inStock", "category", "gallery", "brand"];
    const currencyFields = ["label", "symbol"];

    const query = new Query("category", true)
      .addArgument("input", "CategoryInput", { title: category })
      .addField(
        new Field("products", true)
          .addFieldList(fields)
          .addField(
            new Field("prices", true)
              .addField(new Field("amount", true))
              .addField(
                new Field("currency", true).addFieldList(currencyFields)
              )
          )
      );
    const queryResult = await client.post(query);

    const result = queryResult.category.products.map((product) => {
      return { ...product, gallery: product.gallery[0] };
    });

    return result;
  } catch (err) {
    console.log(err);
  }
}

async function get_items() {
  try {
    const fields = ["id", "name", "inStock", "brand", "category"];

    const query = new Query("category", true).addField(
      new Field("products", true).addFieldList(fields)
    );
    const queryResult = await client.post(query);

    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function get_item_details(product_id) {
  try {
    const fields = ["id", "name", "inStock", "gallery", "description", "brand"];
    const currencyFields = ["label", "symbol"];
    const attributesFields = ["id", "name", "type"];
    const attributesItemsFields = ["id", "value", "displayValue"];

    const query = new Query("product", true)
      .addArgument("id", "String!", product_id)
      .addFieldList(fields)
      .addField(
        new Field("prices", true)
          .addField(new Field("amount", true))
          .addField(new Field("currency", true).addFieldList(currencyFields))
      )
      .addField(
        new Field("attributes", true)
          .addFieldList(attributesFields)
          .addField(
            new Field("items", true).addFieldList(attributesItemsFields)
          )
      );

    const queryResult = await client.post(query);
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function get_currencies() {
  try {
    const currencyFields = ["label", "symbol"];

    const query = new Query("currencies", true).addFieldList(currencyFields);

    const queryResult = await client.post(query);
    return queryResult.currencies;
  } catch (err) {
    console.log(err);
  }
}

export {
  get_category_names,
  get_items,
  get_category_items,
  get_item_details,
  get_currencies,
};

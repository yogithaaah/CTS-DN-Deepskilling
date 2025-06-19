public class Product {
    int ProductId;
    String productName;
    String category;

public Product(int ProductId, String productName, String category)
{
    this.ProductId = ProductId;
    this.productName = productName;
    this.category = category;
}
    @Override
    public String toString() {
    return ProductId + " - " + productName + " (" + category + ")";
}
}
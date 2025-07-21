public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Stationery"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Pen", "Stationery")
        };

        String target = "Phone";

        //Linear Search
        int linearIndex = LinearSearch.search(products, target);
        if (linearIndex != -1)
            System.out.println("Linear Search Found: " + products[linearIndex]);
        else
            System.out.println("Linear Search: Product not found");

        //Binary Search
        int binaryIndex = BinarySearch.search(products, target);
        if (binaryIndex != -1)
            System.out.println("Binary Search Found: " + products[binaryIndex]);
        else
            System.out.println("Binary Search: Product not found");
    }
}

public class Main {
    public static void main(String[] args) {
        Forecast forecast = new Forecast();

        // Example inputs
        double initialValue = 1000.0;    
        double growthRate = 0.05;       
        int years = 10;

        for (int i = 0; i <= years; i++) {
            double futureValue = forecast.predictFutureValue(i, initialValue, growthRate);
            System.out.printf("Year %d: %.2f%n", i, futureValue);
        }
    }
}

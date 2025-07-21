import java.util.HashMap;

public class Forecast {
    private HashMap<Integer, Double> memo = new HashMap<>();

    //Recursive method to calculate future value based on prev value
    public double predictFutureValue(int year, double initialValue, double growthRate) {
        if (year == 0) 
            return initialValue;

        if (memo.containsKey(year)) 
            return memo.get(year);

        double value = predictFutureValue(year - 1, initialValue, growthRate) * (1 + growthRate);
        memo.put(year, value); // store result for memoization
        return value;
    }
}

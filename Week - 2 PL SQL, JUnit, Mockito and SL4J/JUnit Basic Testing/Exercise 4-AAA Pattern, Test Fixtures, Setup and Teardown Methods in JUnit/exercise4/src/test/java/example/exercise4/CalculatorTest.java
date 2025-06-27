package example.exercise4;

import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }
    
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
    	//arrange
        int a = 2;
        int b = 3;
        //act
        int result = calculator.add(a, b);
        //assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
    	//arrange
        int a = 10;
        int b = 4;
        //act
        int result = calculator.subtract(a, b);
        //assert
        assertEquals(6, result);
    }
}

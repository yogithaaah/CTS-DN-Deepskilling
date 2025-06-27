package example.exercise3;

import static org.junit.Assert.*;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        assertEquals(7+9, 16);  //Assert Equals
        assertTrue(34 > 7);       //Assert True
        assertFalse(9 < 3);      //Assert False;
        assertNull(null);        //Assert Null
        assertNotNull(new Object()); //Assert not null
    }
}

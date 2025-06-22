-- Scenario 3:  Printing remainder message for all loans due in the next 30 days
DECLARE
    v_name Customers.Name%TYPE;
BEGIN
    FOR loan IN (
        SELECT LoanID, CustomerID, EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        SELECT Name INTO v_name FROM Customers WHERE CustomerID = loan.CustomerID;

        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID || ' for customer ' || v_name || 
                             ' is due on ' || TO_CHAR(loan.EndDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/

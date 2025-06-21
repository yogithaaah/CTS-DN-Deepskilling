-- Scenario 1: Apply 1% discount to interest rates for customers above 60
BEGIN
  FOR cust IN (SELECT CustomerID, DOB FROM Customers) LOOP
    IF MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12 > 60 THEN
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

select * from Loans;
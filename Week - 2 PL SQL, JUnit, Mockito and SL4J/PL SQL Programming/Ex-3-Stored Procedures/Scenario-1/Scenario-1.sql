-- Scenario 1: Process Monthly Interest for Savings Accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01),
        LastModified = SYSDATE
    WHERE AccountType = 'Savings';
    
    COMMIT;
END;
/

-- Running the stored procedure 

BEGIN
    ProcessMonthlyInterest;
END;
/

select * from Accounts;
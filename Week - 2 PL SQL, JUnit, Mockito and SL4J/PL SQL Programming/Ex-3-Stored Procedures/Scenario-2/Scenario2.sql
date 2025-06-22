-- Scenario 2: Update Employee Bonus by Department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercent IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercent / 100)
    WHERE Department = p_Department;
    
    COMMIT;
END;
/

-- Running the procedure

BEGIN
     UpdateEmployeeBonus('IT',10);
END;
/

select * from Employees;
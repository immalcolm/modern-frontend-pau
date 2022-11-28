
students
- has a reference key parent_id

parents
- available_payments_types (payment types in wallet)

attendance
- student + session (tied together to get a log reference)

In a relational database, how we deal with M:N
We create a new relation that takes in both PK 

`Sample: M:N`
Book ........... Loan
bookId           loanId

`BookLoans`
bookId | loanId

For dates we store in ISO format YYYY-DD-MM HH:MM:SS am/pm
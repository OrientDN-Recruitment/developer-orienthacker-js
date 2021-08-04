Episode 2: Infiltration
-----
After passing the company's probation, you now join a project for building HRMS system. Your task is writing an API to auto-generate working shifts for restaurant employees.

> Coding time: 15-25min

### Requirements
+ Write a new JSON API in `index.js` to auto-generate working shifts for restaurant employees.
+ API should generate shifts for the next 5 days, for 5 employees whose IDs are `A`,`B`,`C`,`D` and `E`
+ Each shift is an object containing these fields:
  - `employees`: list of 2 employees
  - `day`: the day of working shift (from `1` to `5`)
  - `shift_type`: there are 2 possible values `day` and `night`
+ Employees should only work one shift per day and they receive the same total number of shifts in 5 days
+ Employees shouldn't work the same shift type every 2 days in a row
+ Every employees should be notified with their own shifts

### What success looks like
- API should pass all tests
- API should follow a standard response format, and HTTP codes
- API code should be clean and easy for reuse

### Goals and non-goals
- This is a test for robust development, the more concise the code is, the better.
- All requirements should be fulfilled, nothing more. You can discuss with the interviewer beforehand about the best approach you can take.

### How do we measure results
- Requirements fulfillment
- Number of tests passed
- Logic
- Code quality, conciseness

**Good luck & Have fun 🍻**

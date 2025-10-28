# Next.js Technical Interview - Employee Management System

This is a technical interview project built with Next.js 15+ using the App Router, React Server Components, and Server Actions.

## Run the Project

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Interview Instructions

You'll be working with a basic Employee Management System for **EZRA**. The starting point (`main` branch) has a static UI that displays hardcoded employees and a non-functional form.

**The data layer has already been implemented for you** in [app/lib/db.ts](app/lib/db.ts). Your task is to use this existing database module to implement the remaining features and make the application fully functional.

### Existing Data Layer (`app/lib/db.ts`)

The following database module is **already implemented** and ready to use:

- **Employee type** with `id`, `name`, and `role` properties
- **Sample data**: John (Frontend), Mary (Backend), Peter (DevOps)
- **Three async functions** (each with 500ms simulated delay):
  - `getRoles()`: Returns available roles
  - `getEmployees()`: Returns all employees
  - `addEmployee(employee)`: Adds a new employee

The module uses `"server-only"` to ensure it only runs on the server.

### Your Tasks

#### 1. **Create the EmployeeList Component** (`app/components/EmployeeList.tsx`)

Build a component that displays the employee list using React Server Components:

- Create an async Server Component that fetches and displays employees using `getEmployees()`
- Map over employees showing their name and role (e.g., "John (Frontend)")
- Implement a loading skeleton using React Suspense
- The skeleton should display "Loading employees..." with a pulse animation

**Requirements:**

- Use React Server Components (async component)
- Use Suspense for loading states

#### 2. **Create the NewEmployee Form Component** (`app/components/NewEmployee.tsx`)

Build a form component for adding new employees:

- Build a form with:
  - Text input for name
  - Select dropdown for role (populated from `getRoles()`)
  - Submit button
- Implement a loading skeleton for `getRoles()`

**Requirements:**

- Use React Server Components, the `getRoles()` cannot be called on the client
- Use proper form attributes (`name` for inputs, `defaultValue` for select)
- Connect to the server action (next task)

#### 3. **Implement Server Actions** (`app/actions.ts`)

Create a Next.js Server Action to handle form submission:

- Implement `addEmployeeAction(formData)` that:
  - Validates the form data
  - Calls `addEmployee()` from the existing db module to add the new employee
  - Reflects the new employee in the Employee list (tip: revalidate)

---

## Extra Exercises

Once you've completed the core tasks above, try these progressive exercises to add more advanced extra.

### Extra Exercise 1: Search Functionality

Add real-time search capabilities to filter employees by name.

**Requirements:**

- Create a search input component (`app/components/EmployeeSearch.tsx`)
- Implement client-side search using React hooks
- Filter employees in real-time as the user types
- Show "No employees found" message when no results match
- Preserve search state in the URL using Next.js `searchParams`

**Implementation Tips:**

- Use `'use client'` directive for the search input component
- Consider using URL search params for shareable/bookmarkable searches
- Update `getEmployees()` in [app/lib/db.ts](app/lib/db.ts) to accept an optional `searchQuery` parameter

**Bonus:** Add debouncing to optimize performance (wait 300ms after typing stops)

---

### Extra Exercise 2: Employee Roles Filter

Add the ability to filter employees by their role.

**Requirements:**

- Create a filter component (`app/components/RoleFilter.tsx`)
- Allow users to select one or multiple roles to filter by
- Combine filter with existing search functionality
- Update the employee list to show only employees matching the selected role(s)
- Display active filter count (e.g., "Showing 5 employees • 2 filters active")

**Implementation Tips:**

- Store filter state in URL search params alongside search query
- Update `getEmployees()` to accept an optional `roles` array parameter
- Consider using checkboxes for multi-select or a dropdown for single-select

**Bonus:** Show employee count per role in the filter UI (e.g., "Frontend (3)")

---

### Extra Exercise 3: Pagination

Implement server-side pagination for the employee list.

**Requirements:**

- Display 5 employees per page
- Add pagination controls (Previous, Next, page numbers)
- Update URL with current page number
- Show total page count and current page (e.g., "Page 2 of 5")
- Preserve search and filter state when paginating

**Implementation Tips:**

- Use URL search params for page number: `?page=2`
- Update `getEmployees()` to accept `page` and `pageSize` parameters
- Return both `employees` array and `totalCount` from the function
- Calculate `totalPages` on the server

**Bonus:** Implement "Load More" infinite scroll as an alternative UI

---

### Extra Exercise 4: Sorting

Add the ability to sort employees by name or role.

**Requirements:**

- Add sort controls (clickable column headers or dropdown)
- Preserve sort state in URL
- Combine sorting with search, filter, and pagination

**Implementation Tips:**

- Store sort state in URL: `?sortBy=name&order=asc`
- Update `getEmployees()` to accept `sortBy` and `order` parameters
- Make column headers clickable to toggle sort

---

### Extra Exercise 5: Edit & Delete Employees

Add the ability to edit and delete existing employees.

**Requirements:**

- Add "Edit" and "Delete" buttons to each employee row
- Create an edit form (inline or modal)
- Implement server actions:
  - `updateEmployeeAction(id, formData)`
  - `deleteEmployeeAction(id)`
- Show success/error messages

**Implementation Tips:**

- Add `updateEmployee()` and `deleteEmployee()` functions to [app/lib/db.ts](app/lib/db.ts)

**Bonus:**

- Add confirmation dialog for delete action

---

### Extra Exercise 7: Form Validation & Error Handling

Enhance form validation and error handling.

**Requirements:**

- Add comprehensive validation:
  - Name: Required, min 2 chars, max 50 chars, no special characters
  - Role: Must be a valid role from the list
  - Email: Valid email format (if added in Exercise 10)
- Show field-level error messages
- Prevent submission when validation fails
- Display server-side errors from Server Actions
- Add loading states to form submissions

---

### Extra Exercise 6: Optimistic Updates

Implement optimistic UI updates to make the application feel more responsive.

**Requirements:**

- Show the new employee in the list instantly before server confirmation
- Remove and edit employees optimistically
- Handle rollback if the server action fails
- Show error messages if the optimistic update fails

---

---

## Suggested Implementation Order

**Phase 1 - Core Features:**

1. Exercise 4: Search
2. Exercise 5: Role Filter
3. Exercise 7: Sorting

**Phase 2 - Data Management:** 4. Exercise 6: Pagination 5. Exercise 8: Edit & Delete 6. Exercise 10: Validation

**Phase 3 - Advanced UX:** 7. Exercise 9: Optimistic Updates

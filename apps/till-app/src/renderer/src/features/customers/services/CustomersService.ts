/**
 * Customers Module — CustomersService
 *
 * Data access abstraction layer for the Customers module.
 * Currently uses dummy data.
 * Day 10 - Step 2
 */

import type { Customer, CustomerSummary } from '../types';
import { DUMMY_CUSTOMERS, DUMMY_CUSTOMER_SUMMARY } from '../data/customersData';

export class CustomersService {
  /**
   * Fetch the global summary and list of customers
   */
  static async getCustomers(): Promise<CustomerSummary> {
    return Promise.resolve(DUMMY_CUSTOMER_SUMMARY);
  }

  /**
   * Fetch a specific customer by ID
   */
  static async getCustomerById(id: string): Promise<Customer | null> {
    const customer = DUMMY_CUSTOMERS.find((c) => c.id === id);
    return Promise.resolve(customer || null);
  }

  /**
   * Search customers by query string
   */
  static async searchCustomers(query: string): Promise<Customer[]> {
    if (!query.trim()) {
      return Promise.resolve(DUMMY_CUSTOMERS);
    }
    const q = query.toLowerCase();
    const results = DUMMY_CUSTOMERS.filter(
      (c) =>
        c.fullName.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.customerCode.toLowerCase().includes(q)
    );
    return Promise.resolve(results);
  }

  /**
   * Create a new customer
   */
  static async createCustomer(_customer: Partial<Customer>): Promise<Customer> {
    // Return a dummy successful response
    return Promise.resolve(DUMMY_CUSTOMERS[0]);
  }

  /**
   * Update an existing customer
   */
  static async updateCustomer(_id: string, _customer: Partial<Customer>): Promise<Customer> {
    // Return a dummy successful response
    return Promise.resolve(DUMMY_CUSTOMERS[0]);
  }

  /**
   * Delete a customer
   */
  static async deleteCustomer(_id: string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

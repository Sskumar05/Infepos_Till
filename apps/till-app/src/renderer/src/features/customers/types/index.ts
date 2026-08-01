/**
 * Customers Module — Types
 *
 * Defines the core domain models for customer management.
 * Day 10 - Step 2
 */

export type CustomerType = 'REGULAR' | 'MEMBER' | 'VIP' | 'WHOLESALE';

export type CustomerStatus = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

export type LoyaltyLevel = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';

export interface Customer {
  id: string;
  customerCode: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
  customerType: CustomerType;
  loyaltyLevel: LoyaltyLevel;
  loyaltyPoints: number;
  status: CustomerStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerSummary {
  customers: Customer[];
  selectedCustomer: Customer | null;
  totalCustomers: number;
  activeCustomers: number;
  vipCustomers: number;
  blockedCustomers: number;
}

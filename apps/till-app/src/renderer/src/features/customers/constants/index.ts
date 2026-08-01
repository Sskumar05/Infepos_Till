/**
 * Customers Module — Constants
 *
 * Immutable constants and configuration for the Customers module.
 * Day 10 - Step 2
 */

import type { CustomerType, CustomerStatus, LoyaltyLevel } from '../types';

export const CUSTOMER_TYPES: Record<string, CustomerType> = {
  REGULAR: 'REGULAR',
  MEMBER: 'MEMBER',
  VIP: 'VIP',
  WHOLESALE: 'WHOLESALE',
};

export const CUSTOMER_STATUS: Record<string, CustomerStatus> = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCKED: 'BLOCKED',
};

export const LOYALTY_LEVELS: Record<string, LoyaltyLevel> = {
  BRONZE: 'BRONZE',
  SILVER: 'SILVER',
  GOLD: 'GOLD',
  PLATINUM: 'PLATINUM',
};

export const DEFAULT_COUNTRY = 'United Kingdom';

export const DEFAULT_CURRENCY = 'GBP';

export const CUSTOMER_SORT_OPTIONS = [
  { label: 'Name (A-Z)', value: 'name_asc' },
  { label: 'Name (Z-A)', value: 'name_desc' },
  { label: 'Loyalty Points (High to Low)', value: 'points_desc' },
  { label: 'Recently Added', value: 'created_desc' },
];

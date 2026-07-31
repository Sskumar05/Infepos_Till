# Store Modules

This directory is reserved for domain-specific Zustand slice creators.

## Convention

Each file in this directory exports:

1. A **TypeScript interface** (the slice's state + actions shape).
2. A **`StateCreator`** function that the root store (`index.ts`) spreads in.

## Template (copy for each new domain)

```ts
import type { StateCreator } from 'zustand'
import type { AppState } from '../types'

export interface ExampleSlice {
  // state
  exampleValue: string

  // actions
  setExampleValue: (value: string) => void
}

export const createExampleSlice: StateCreator<AppState, [], [], ExampleSlice> = (set) => ({
  exampleValue: '',
  setExampleValue: (value) => set({ exampleValue: value }),
})
```

## Steps to add a new slice

1. Create `modules/exampleSlice.ts` following the template above.
2. Import `ExampleSlice` into `../types.ts` and add it to `AppState`.
3. Import `createExampleSlice` into `../index.ts` and spread it into the store.

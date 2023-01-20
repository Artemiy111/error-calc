import customRounded from '@/utils/customRounded'

import { describe, it, expect } from 'vitest'

describe('customRounded', () => {
  it('integer', () => {
    expect(customRounded(0)).toBe(0)
    expect(customRounded(100)).toBe(100)
  })

  it('high accuracy', () => {
    expect(customRounded(0.0001222)).toBe(0.00012)
    expect(customRounded(0.0001299)).toBe(0.00013)
  })

  it('standart accuracy', () => {
    expect(customRounded(0.2345)).toBe(0.2)
    expect(customRounded(0.299)).toBe(0.3)
  })
})
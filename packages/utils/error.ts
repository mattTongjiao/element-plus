class TongjiaoUIPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'TongjiaoUIPlusError'
  }
}

export default (scope: string, m: string) => {
  throw new TongjiaoUIPlusError(`[${scope}] ${m}`)
}

export function warn(scope: string, m: string) {
  console.warn(new TongjiaoUIPlusError(`[${scope}] ${m}`))
}

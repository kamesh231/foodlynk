import { Request, Response, NextFunction } from 'express'

export interface TenantContext {
  tenant: string
}

declare module 'express-serve-static-core' {
  interface Request {
    tenant?: TenantContext
  }
}

export default function tenantResolver(req: Request, _res: Response, next: NextFunction) {
  const host = req.headers.host || ''
  const tenantSlug = host.split('.')[0]
  req.tenant = { tenant: tenantSlug }
  next()
}

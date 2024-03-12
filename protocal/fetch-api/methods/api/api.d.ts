interface AnyObject {
  [key: string|number]: any
}

interface DefaultRes {
  data: null
  status: ApiStatus
}

interface ApiStatus {
  is_success: boolean
  message: string
  detail: string
  httpStatus?: number
}

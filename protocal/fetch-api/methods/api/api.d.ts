interface AnyObject {
  [key: string|number]: any;
}

interface ResObject {
  data: any;
  status: ApiStatus;
}

interface ApiStatus {
  is_success: boolean,
  code?: number;
  message?: string;
  detail?: {[key:string]: string[]}
  errMsg: string;
  httpStatus?: number;
  [key: string]: array
}
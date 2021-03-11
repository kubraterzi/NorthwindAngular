import { Product } from './product';
import { ResponseModel } from './responseModel';

export interface ProductResponseModel extends ResponseModel { /* Bir interface başka bir interface i inherit eder.(extends) */
  data: Product[]
}

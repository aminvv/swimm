import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../../../common/api/api.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Product {
  id: number;

  productCode: string;
  productName?: string;
  description?: string;
  price: number;

  
  rollWeight?: number;
  thickness?: number;
  dimensions?: string;
  lifespan?: string;
  bitumenType?: string;
  warranty?: string;
  image?: string[];
  quantity?: number;
  discountPercent?: number;
  discountAmount?: number;
  nationalProductCode?: string;
  fiberBaseType?: string;
  internationalCode?: string;
  brandRegistrationNumber?: string;
  coatingType?: string;
  productBenefits?: string;
  applicationType?: string;
  isogumType?: string;
  technicalSpecifications?: string;
}


export interface ProductResponse {
  products: Product[];
  pagination: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${API_CONFIG.baseUrl}/${API_CONFIG.product}`;

  constructor(private http: HttpClient) { }

  getProducts(page: number = 1, limit: number = 6): Observable<ProductResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<ProductResponse>(this.apiUrl, { params });
  }

  getProductById(id: string) {
    return this.http.get<Product>(`${API_CONFIG.baseUrl}/${API_CONFIG.product}/${id}`)
  }
}
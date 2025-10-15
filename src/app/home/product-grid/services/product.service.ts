import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../../../common/api/api.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Product {
  id: number;
  productName: string;
  productCode: string;
  price: string;
  oldPrice?: string;
  image: string[] | null;
  description: string;
  dimensions?: string;
  warranty?: string;
  rollWeight?: string;
  thickness?: string;
  lifespan?: string;
  bitumenType?: string;
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
}
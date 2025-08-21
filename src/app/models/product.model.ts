export interface Product {
  id: number | string; // Tuve que dejarlo como number | string para que funcione con json-server
  name: string;
  price: number;
  stock: number;
}
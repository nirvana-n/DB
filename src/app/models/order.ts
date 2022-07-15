import { Address } from "./address";

export interface Order {
    id: number,
    delivery_method: string,
    created_at: string,
    customer_address: Address,
    order_items: any[],
    order_status: any
}
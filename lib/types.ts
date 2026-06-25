export interface GiftItem {
  id: string
  name: string
  description: string | null
  image_url: string | null
  purchase_link: string | null
  category: string | null
  is_reserved: boolean
  reserved_by: string | null
  reserved_at: string | null
  created_at: string
  updated_at: string
}

export type GiftItemInsert = Omit<GiftItem, 'id' | 'created_at' | 'updated_at' | 'is_reserved' | 'reserved_by' | 'reserved_at'>

export type GiftItemUpdate = Partial<GiftItemInsert>

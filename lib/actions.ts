'use server'

import { revalidateTag } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { GiftItemInsert, GiftItemUpdate } from '@/lib/types'

export async function getGiftItems() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gift_items')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

export async function addGiftItem(item: GiftItemInsert) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gift_items')
    .insert(item)
    .select()
    .single()
  
  if (error) throw error
  revalidateTag('gift-items', 'max')
  return data
}

export async function updateGiftItem(id: string, updates: GiftItemUpdate) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gift_items')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  revalidateTag('gift-items', 'max')
  return data
}

export async function deleteGiftItem(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('gift_items')
    .delete()
    .eq('id', id)
  
  if (error) throw error
  revalidateTag('gift-items', 'max')
}

export async function reserveGiftItem(id: string, name: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gift_items')
    .update({
      is_reserved: true,
      reserved_by: name,
      reserved_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  revalidateTag('gift-items', 'max')
  return data
}

export async function unreserveGiftItem(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gift_items')
    .update({
      is_reserved: false,
      reserved_by: null,
      reserved_at: null,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) throw error
  revalidateTag('gift-items', 'max')
  return data
}

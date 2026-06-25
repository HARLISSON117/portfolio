'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Gift, ExternalLink, Check, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AdminItemForm } from '@/components/admin-item-form'
import type { GiftItem } from '@/lib/types'

interface AdminListProps {
  items: GiftItem[]
}

export function AdminList({ items }: AdminListProps) {
  const router = useRouter()

  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Nenhum item cadastrado. Adicione o primeiro item!
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-3 p-3 border rounded-lg bg-background"
        >
          {/* Imagem */}
          <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-lg overflow-hidden bg-muted shrink-0">
            {item.image_url ? (
              <Image
                src={item.image_url}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <Gift className="h-5 w-5 text-muted-foreground/40" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base truncate">{item.name}</p>
                {item.description && (
                  <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                )}
              </div>
              <AdminItemForm item={item} onSuccess={() => router.refresh()} />
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              {item.category && (
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
              )}
              
              {item.is_reserved ? (
                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                  <Check className="h-3 w-3 mr-1" />
                  Reservado
                </Badge>
              ) : (
                <Badge variant="outline" className="text-xs">Disponivel</Badge>
              )}

              {item.purchase_link && (
                <a
                  href={item.purchase_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline text-xs"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Ver
                </a>
              )}
            </div>

            {item.is_reserved && item.reserved_by && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
                <User className="h-3 w-3" />
                {item.reserved_by}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

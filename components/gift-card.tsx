'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Gift, Check, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { GiftItem } from '@/lib/types'
import { reserveGiftItem } from '@/lib/actions'

interface GiftCardProps {
  item: GiftItem
  onReserved?: () => void
}

export function GiftCard({ item, onReserved }: GiftCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [reserverName, setReserverName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleReserve = async () => {
    if (!reserverName.trim()) return
    
    setIsLoading(true)
    try {
      await reserveGiftItem(item.id, reserverName.trim())
      setIsDialogOpen(false)
      setReserverName('')
      onReserved?.()
    } catch (error) {
      console.error('Erro ao reservar:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${item.is_reserved ? 'opacity-75' : ''}`}>
        <div className="relative aspect-square bg-muted">
          {item.image_url ? (
            <Image
              src={item.image_url}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <Gift className="h-16 w-16 text-muted-foreground/40" />
            </div>
          )}
          {item.is_reserved && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
                <Check className="h-4 w-4 mr-2" />
                Reservado
              </Badge>
            </div>
          )}
          {item.category && !item.is_reserved && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              {item.category}
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-1 text-balance">
            {item.name}
          </h3>
          
          {item.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {item.description}
            </p>
          )}
          
          {item.is_reserved && item.reserved_by && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 bg-muted rounded-lg px-3 py-2">
              <User className="h-4 w-4" />
              <span>Reservado por <strong>{item.reserved_by}</strong></span>
            </div>
          )}
          
          <div className="flex gap-2">
            {!item.is_reserved ? (
              <Button 
                onClick={() => setIsDialogOpen(true)} 
                className="flex-1"
              >
                <Gift className="h-4 w-4 mr-2" />
                Quero Presentear
              </Button>
            ) : (
              <Button 
                variant="secondary" 
                disabled 
                className="flex-1"
              >
                <Check className="h-4 w-4 mr-2" />
                Reservado
              </Button>
            )}
            
            {item.purchase_link && (
              <Button
                variant="outline"
                size="icon"
                asChild
              >
                <a href={item.purchase_link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reservar Presente</DialogTitle>
            <DialogDescription>
              Informe seu nome para reservar &quot;{item.name}&quot;. Assim os outros convidados saberao que voce vai presentear este item.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Seu Nome</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                value={reserverName}
                onChange={(e) => setReserverName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleReserve()}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleReserve} disabled={!reserverName.trim() || isLoading}>
              {isLoading ? 'Reservando...' : 'Confirmar Reserva'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

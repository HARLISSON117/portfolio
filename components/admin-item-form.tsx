'use client'

import { useState } from 'react'
import { Plus, Pencil, Trash2, X, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { addGiftItem, updateGiftItem, deleteGiftItem, unreserveGiftItem } from '@/lib/actions'
import type { GiftItem, GiftItemInsert } from '@/lib/types'

interface AdminItemFormProps {
  item?: GiftItem
  onSuccess?: () => void
}

export function AdminItemForm({ item, onSuccess }: AdminItemFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<GiftItemInsert>({
    name: item?.name || '',
    description: item?.description || '',
    image_url: item?.image_url || '',
    purchase_link: item?.purchase_link || '',
    category: item?.category || '',
  })

  const isEditing = !!item

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) return

    setIsLoading(true)
    try {
      if (isEditing) {
        await updateGiftItem(item.id, formData)
      } else {
        await addGiftItem(formData)
      }
      setIsOpen(false)
      setFormData({ name: '', description: '', image_url: '', purchase_link: '', category: '' })
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao salvar:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!item || !confirm('Tem certeza que deseja excluir este item?')) return
    
    setIsLoading(true)
    try {
      await deleteGiftItem(item.id)
      setIsOpen(false)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao excluir:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleUnreserve = async () => {
    if (!item || !confirm('Tem certeza que deseja remover a reserva deste item?')) return
    
    setIsLoading(true)
    try {
      await unreserveGiftItem(item.id)
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao remover reserva:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {isEditing ? (
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
        ) : (
          <Button size="sm" className="text-xs sm:text-sm">
            <Plus className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Adicionar Item</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Editar Item' : 'Adicionar Novo Item'}</DialogTitle>
            <DialogDescription>
              {isEditing ? 'Edite as informacoes do item' : 'Preencha as informacoes do novo item para a lista'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                placeholder="Ex: Jogo de Panelas"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descricao</Label>
              <Textarea
                id="description"
                placeholder="Descricao opcional do item"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_url">URL da Imagem</Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="image_url"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={formData.image_url || ''}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchase_link">Link para Compra</Label>
              <Input
                id="purchase_link"
                placeholder="https://loja.com/produto"
                value={formData.purchase_link || ''}
                onChange={(e) => setFormData({ ...formData, purchase_link: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Input
                id="category"
                placeholder="Ex: Cozinha, Sala, Banheiro"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>

            {isEditing && item?.is_reserved && (
              <div className="bg-muted rounded-lg p-3 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Reservado por: <strong>{item.reserved_by}</strong>
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleUnreserve}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remover Reserva
                </Button>
              </div>
            )}
          </div>

          <DialogFooter className="gap-2">
            {isEditing && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isLoading}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Excluir
              </Button>
            )}
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!formData.name.trim() || isLoading}>
              {isLoading ? 'Salvando...' : isEditing ? 'Salvar' : 'Adicionar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export interface Image {
  id: number
  fileName: string
  uploadPath: string
  size: number
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export interface Category {
  id: number
  name: string
  flag?: number
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  parentId?: Category
  subCategories?: Category[]
}

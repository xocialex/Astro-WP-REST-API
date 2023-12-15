export interface Poster {
  id: number
  title: {
    rendered: string
  },
  excerpt: {
    rendered: string
    protected: boolean
  },
  img: string
  i: number
  featured_media: number
  source_url: string
  imageUrls: string
  slug: string
}

export interface ImportMetaEnv {
  readonly SECRET_API: string;
}
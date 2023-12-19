import { Question } from '@/domain/forum/enterprise/entities/question'
import { PaginationParams } from './pagination-params'

export interface QuestionsRepository {
  findById(id: string): Promise<Question | null>
  findBySlug(slug: string): Promise<Question | null>
  create(question: Question): Promise<void>
  delete(question: Question): Promise<void>
  save(question: Question): Promise<void>
  findManyRecent(params: PaginationParams): Promise<Question[]>
}

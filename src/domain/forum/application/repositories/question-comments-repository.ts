import { QuestionComment } from '../../enterprise/entities/question-comment'
import { PaginationParams } from './pagination-params'

export interface QuestionCommentsRepository {
  findById(id: string): Promise<QuestionComment | null>
  create(questionComment: QuestionComment): Promise<void>
  delete(questionComment: QuestionComment): Promise<void>
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]>
}

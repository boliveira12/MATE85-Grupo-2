export class CreateArticleDto {
  constructor(
    student_id: number,
    title: string,
    publication_date: Date,
    publication_place: string,
    doi_link: string
  ) {
    this.student_id = student_id
    this.title = title
    this.publication_date = publication_date
    this.publication_place = publication_place
    this.doi_link = doi_link
  }

  readonly student_id: number
  readonly title: string
  readonly publication_date: Date
  readonly publication_place: string
  readonly doi_link: string
}

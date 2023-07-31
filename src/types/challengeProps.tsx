export default interface ChallengeProps {
  id: number
  title: string
  image: string
  description: string
  level: 'Easy' | 'Medium' | 'Hard'
  topics?: string[]
}

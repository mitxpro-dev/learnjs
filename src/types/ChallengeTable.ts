import { Database } from '@/schemas/schema'

type ChallengeTable = Database['public']['Tables']['Challenges']['Row'][]

export default ChallengeTable

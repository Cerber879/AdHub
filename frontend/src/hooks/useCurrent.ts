import { useEffect } from 'react'

import {
  useClearSessionCokkieMutation,
  useFindProfileQuery,
} from '../graphql/generated/output'

import { useAuth } from './useAuth'

export function useCurrent() {
  const { isAuthenticated, exit } = useAuth()

  const { data, loading, refetch, error } = useFindProfileQuery({
    skip: !isAuthenticated,
  })

  const [clear] = useClearSessionCokkieMutation()

  useEffect(() => {
    if (error) {
      if (isAuthenticated) {
        clear()
      }
      exit()
    }
  }, [isAuthenticated, exit, clear])

  return {
    user: data?.findProfile,
    isLoadingProfile: loading,
    refetch,
  }
}
